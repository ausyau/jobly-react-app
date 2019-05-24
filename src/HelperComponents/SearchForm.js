/* Form used for search on both the 'Jobs' and 'Companies' page
includes debounce feature */

import React, { Component } from 'react'
import _ from 'lodash'

export default class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: ''
    }

    this.handleSubmit = _.debounce(this.handleSubmit.bind(this), 500);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.search({ search: this.state.filter });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
    this.handleSubmit(evt)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="filter"></label>
            <input className="form-control" name="filter" id="filter" value={this.state.filter} onChange={this.handleChange} ></input>
            <button className="btn btn-info">Search</button>
          </div>
        </form>
      </div>
    )
  }
}
