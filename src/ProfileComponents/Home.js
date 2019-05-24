import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-bg">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Welcome to Jobly</h1>
              <p className="lead">Find some jobs and register</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;


