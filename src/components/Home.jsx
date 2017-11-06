import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

import { openAuth } from '../actions/auth';

import dashboardScreenshot from '../images/dashboard.png';

import ShowLoaderHOC from '../HOCs/ShowLoaderHOC';
import { AUTH_AWAITING_RESPONSE } from '../actions/types';

export class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="hero">
          <h1>Designed to help with your 1 on 1s and for use on your smartphone.</h1>
          <div className="centered">
            <RaisedButton
              primary={true}
              label="Try it"
              onTouchTap={this.props.openAuth}
            />
          </div>
        </div>

        <div className="odd">
          <ul>
            <li>No more taking notes on paper that can get lost.</li>
            <li>Link follow up actions to people and meetings.</li>
            <li>Group your people into teams</li>
            <li>Includes a library of 300 suggested questions.</li>
            <li>Designed for easy note taking and follow up on your phone
              while you are away from your desk or computer.</li>
          </ul>
          <div className="centered">
            <RaisedButton
              containerElement={<Link to="/features" />}
              label="Features"
              primary={true}
            />
          </div>
        </div>

        <div className="even centered">
          <div>
            <h3>Dashboard</h3>
            <img
              className="screen-shot"
              src={dashboardScreenshot}
              alt="dashboard screenshot"
            />
            <p>See recent meetings and pending follow up items at a glance</p>
          </div>
        </div>
        
        <div className="login-section odd">
          <p>
            Create a free account using Google
          </p>
          <RaisedButton
            primary={true}
            label="Login / Sign up"
            onTouchTap={this.props.openAuth}
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  openAuth: PropTypes.func.isRequired,
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  authStatus: state.auth.status,
});

const mapDispatchToProps = {
  openAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ShowLoaderHOC('authStatus', AUTH_AWAITING_RESPONSE)(Home),
);
