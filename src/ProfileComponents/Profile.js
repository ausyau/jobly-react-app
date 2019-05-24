/* Renders a form for editing a user's profile information */

import React, { Component } from 'react';

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.username,
      password: '',
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      email: this.props.user.email
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // method below ensures that state is set correctly when a user hard refreshes
  // this fixes a bug found in which user info wouldn't pre-populate in the form
  static getDerivedStateFromProps(props, state) {
    if (props.username === state.username) {
      return {
        username: props.user.username,
        password: '',
        first_name: props.user.first_name,
        last_name: props.user.last_name,
        email: props.user.email
      };
    }
    return null;
  }

  handleSubmit(evt) {
    try {
      evt.preventDefault();
      this.props.updateUser(this.state);
      this.setState(st => ({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
      }));
    } catch (err) {
      console.log(err);
    }
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username </label>
            <input className="form-control" name="username" id="username" value={this.state.username} onChange={this.handleChange} disabled></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password </label>
            <input className="form-control" name="password" type="password" id="password" value={this.state.password} onChange={this.handleChange} ></input>
          </div>
          <div className="form-group">
            <label htmlFor="first_name">Firstname </label>
            <input className="form-control" name="first_name" id="first_name" value={this.state.first_name} onChange={this.handleChange} ></input>
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Lastname </label>
            <input className="form-control" name="last_name" id="last_name" value={this.state.last_name} onChange={this.handleChange} ></input>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input className="form-control" name="email" id="email" value={this.state.email} onChange={this.handleChange} ></input>
          </div>
          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    );
  }
}
