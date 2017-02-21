import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as headerActions from '../actions/header';

class About extends Component {

  componentDidMount() {
    this.props.setText('About');
  }

  render() {
    return (
      <div className="container about">
        <p>Hi, this is the about page. Not much here yet.</p>
      </div>
    );
  }
}

export default connect(null, { setText: headerActions.setText })(About);
