import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as headerActions from '../actions/header';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.setText('1on1 Tracker');
  }

  render() {
    return (
      <div className="container dashboard">
        <p>
          This is the dashboard.
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setText: headerActions.setText,
};

export default connect(null, mapDispatchToProps)(Dashboard);
