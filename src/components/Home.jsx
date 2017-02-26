import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import * as headerActions from '../actions/header';
import { openAuth } from '../actions/auth';

export class Home extends Component {
  componentDidMount() {
    this.props.setText('1on1 Tracker');
  }

  render() {
    return (
      <div className="container home">
        <p>
          Welcome, this is a one on one tracking app for managers and their direct reports.
        </p>
        <p>
          Create a free account using Google
        </p>
        <RaisedButton
          primary={true}
          label="Sign up"
          onTouchTap={this.props.openAuth}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  openAuth,
  setText: headerActions.setText,
};

export default connect(null, mapDispatchToProps)(Home);
