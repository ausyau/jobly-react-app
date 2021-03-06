/* Renders an individual job card with 'apply' buttons */

import React, { Component } from 'react';

export default class Jobcard extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(evt) {
    evt.preventDefault();
    await this.props.applyToJob(evt.target.parentNode.id);
  }


  render() {
    let applyButton = <button type="button" className="btn btn-danger" onClick={this.handleClick} >Apply </button>;
    let appliedButton = <button type="button" className="btn btn-danger" disabled> Applied </button>;

    let isApplied = [];
    if(this.props.user.jobs){
      isApplied = this.props.user.jobs.some(job => job.id === this.props.id);
    }

    return (
      <div className="card mt-3 col-8 offset-md-2">
        <div className="card-body" id={this.props.id}>
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">Salary: {this.props.salary} Equity: {this.props.equity}</p>
          {isApplied ? appliedButton : applyButton}
        </div>
      </div>
    );
  }
}
