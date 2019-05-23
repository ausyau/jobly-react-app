import React, { Component } from 'react'

export default class Jobcard extends Component {
  constructor(props) {
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }
  
  
  async handleClick(evt) {
    evt.preventDefault()
    console.log(evt.target.parentNode.id)
    await this.props.applyToJob(evt.target.parentNode.id)
  }
  


  render() {


    let applyButton = <button type="button" className="btn btn-danger" onClick={this.handleClick} >Apply </button>
    let appliedButton = <button type="button" className="btn btn-danger" disabled> Applied </button>

    // let appliedJobIds = this.props.user.jobs.map(job => job.id)
    // console.log(this.props.user.jobs)

    let isApplied = this.props.user.jobs.some(job => job.id === this.props.id)
    // let status = this.props.user.jobs.includes(this.props.id) ? disabled : ''
    
    return (
      <div id={this.props.id}> 
        <p>{this.props.title} {this.props.salary} {this.props.equity}</p>
      {isApplied ? appliedButton : applyButton}
      </div>
    )
  }
}
