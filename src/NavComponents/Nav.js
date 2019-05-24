/* navbar component - navbar elements change based of user
logged in status */

import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

class Nav extends Component {

  render() {
    const isLoggedIn = this.props.isLoggedIn ? <li> <NavLink className="link" exact to="/" onClick={this.props.logOut}>Logout</NavLink></li> : <li><NavLink exact to="/login">Login</NavLink></li>

    return (

      <nav className="Navigation navbar navbar-expand-md sm-col-2">
        <NavLink className="navbar-brand link" exact to="/">Jobly</NavLink>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <NavLink className="link" exact to="/companies">Companies</NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="link" exact to="/jobs">Jobs</NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="link" exact to="/profile">Profile</NavLink>
          </li>
          {isLoggedIn}
        </ul>
      </nav>
    );
  }
}

export default Nav;
