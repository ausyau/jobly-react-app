/* component which renders a list of individual job card components */

import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import { Redirect } from 'react-router-dom';
import UserContext from '../HelperComponents/userContext';
import Jobcard from './Jobcard';
import SearchForm from '../HelperComponents/SearchForm';

export default class Jobs extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
    this.getJobs = this.getJobs.bind(this);
  }

  async componentDidMount() {
    if(this.context.username) {
      let result = await JoblyApi.getJobs();
      this.setState({ jobs: result });
    }
  }

  componentWillUnmount() {
    this.setState({ companies: [] });
  }

  async getJobs(search) {
    let result = await JoblyApi.getJobs(search);
    this.setState({ jobs: result });
  }

  render() {

    let loggedIn = <div>
      <SearchForm id='job' search={this.getJobs} />
      {this.state.jobs.map(job => (<Jobcard key={job.id} {...job} applyToJob={this.props.applyToJob} user={this.props.user} />))}
    </div>;

    const currentUser = this.context;

    return (
      <div className="Home">
        {currentUser.username
          ? <div>{loggedIn} </div>
          : <Redirect to='/' />
        }
      </div>
    );
  }
}
