import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

class Nav extends Component {

  render() {
    console.log('logged in?', this.props.isLoggedIn)
    const isLoggedIn = this.props.isLoggedIn ? <li> <NavLink exact to="/" onClick={ this.props.logOut }>Logout</NavLink></li> : <li><NavLink exact to="/login">Login</NavLink></li>

    return (
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/companies">Companies</NavLink></li>
        <li><NavLink exact to="/jobs">Jobs</NavLink></li>
        <li><NavLink exact to="/profile">Profile</NavLink></li>
        {isLoggedIn}
      </ul>
    )
  }
}

export default Nav;