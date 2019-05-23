import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Companycard extends Component {

  render() {
    return (
      <div>
        <Link exact="true" to={`/companies/${this.props.handle}`}> <p>{this.props.name} {this.props.description} <img src={this.props.logo_url} /></p></Link>
       
      </div>
    )
  }
}
