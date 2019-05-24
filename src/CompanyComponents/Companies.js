/* Companies component renders a list of companies */

import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import { Redirect } from 'react-router-dom';
import UserContext from '../HelperComponents/userContext';
import Companycard from '../CompanyComponents/Companycard';
import SearchForm from '../HelperComponents/SearchForm';


class Companies extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);

    this.state = {
      companies: []
    };

    this.getCompanies = this.getCompanies.bind(this);
  }

  async componentDidMount() {
    if (this.context.username) {
      let result = await JoblyApi.getCompanies();
      this.setState({ companies: result });
    }
  }

  componentWillUnmount() {
    this.setState({ companies: [] });
  }

  async getCompanies(search) {
    let result = await JoblyApi.getCompanies(search);
    this.setState({ companies: result });
  }

  render() {

    let loggedIn = <div>
      <SearchForm id="company" search={this.getCompanies} />
      {this.state.companies.map(company => (<Companycard key={company.handle} handle={company.handle} {...company} />))}
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


export default Companies;
