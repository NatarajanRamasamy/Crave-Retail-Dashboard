import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        Dashboard
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
    user
  }
}

const connectedViewPage = connect(mapStateToProps)(Dashboard);
export { connectedViewPage as Dashboard }; 
