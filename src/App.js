import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './HelperComponents/userContext';
import Nav from './NavComponents/Nav';
import Routes from './Routes';
import JoblyApi from './JoblyApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentUser: {
        jobs: []
      }
    };
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.applyToJob = this.applyToJob.bind(this);
  }

  async componentDidMount() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      const response = await JoblyApi.getUser(username);
      this.setState({ isLoggedIn: true, currentUser: response.user });
    }
  }

  async logIn() {
    const username = localStorage.getItem('username');
    const response = await JoblyApi.getUser(username);
    this.setState(st => ({ isLoggedIn: true, currentUser: response.user }));
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.setState(st => ({ isLoggedIn: false, currentUser: {} }));
  }

  async updateUser(userObj) {
    try {

      let response = await JoblyApi.updateUser(userObj);
      this.setState(st => ({ currentUser: response.user }));
    } catch (err) {
      console.log(err);
    }
  }

  async applyToJob(jobId) {
    await JoblyApi.applyToJob(jobId);
    const username = localStorage.getItem('username');
    const response = await JoblyApi.getUser(username);
    this.setState({ isLoggedIn: true, currentUser: response.user });

  }

  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <main>
          <div className="App container-fluid">
            <BrowserRouter>
              <Nav isLoggedIn={this.state.isLoggedIn} logOut={this.logOut} />
              <Routes updateUser={this.updateUser} user={this.state.currentUser} logIn={this.logIn} applyToJob={this.applyToJob} />
            </BrowserRouter>
          </div>
        </main>
      </UserContext.Provider>
    );
  }
}

export default App;
