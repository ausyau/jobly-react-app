import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="jumbotron jumbotron-fluid home-jumbo mx-auto">
          <div className="container">
            <h1 className="display-4 text-center">Welcome to Jobly</h1>
            <p className="lead text-center">Register and find some jobs!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;


