import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { openAuth } from '../actions/auth';

import heroImage from '../images/Cover.jpg';
import { brightGreen, brightGreen10 } from '../colors';
import dashboardScreenshot from '../images/dashboard.png';
import directsScreenshot from '../images/directs.png';

import ShowLoaderHOC from '../HOCs/ShowLoaderHOC';
import { AUTH_AWAITING_RESPONSE } from '../actions/types';

const style = {
  hero: {
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '600px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  heroText: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '600px',
    width: '100%',
    textAlign: 'center',
    color: 'white',
    paddingTop: '230px',
  },
  heroTitle: {
    fontSize: '50px',
  },
  sectionOdd: {
    padding: '50px',
  },
  sectionEven: {
    padding: '50px',
    backgroundColor: brightGreen10,
  },
  greenHeader: {
    color: brightGreen,
    marginBottom: '50px',
  },
  centeredgreenHeader: {
    color: brightGreen,
    marginBottom: '50px',
    textAlign: 'center',
  },
  divideTwo: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  screenshot: {
    border: '1px solid #ccc',
    maxWidth: 360,
  },
  blurbs: {
    marginBottom: '50px',
  },
};

export class Home extends Component {

  render() {
    return (
      <div className="home">
        <div style={style.hero} />
        <div style={style.heroText}>
          <h1 style={style.heroTitle}>Simple. Fast. Handy.</h1>
          <h2>One on One tracker for busy managers. Designed for on the go using your smartphone.</h2>
        </div>

        <div style={style.sectionOdd}>
          <h1 style={style.greenHeader}>One on one meetings are
            critical leading your team.</h1>
          <div style={style.divideTwo}>
            <ul style={style.blurbs}>
              <li>No more taking notes on paper that can get lost.</li>
              <li>Link follow up actions to people and meetings.</li>
              <li>Group your people into teams</li>
              <li>Includes a library of 300 suggested questions.</li>
              <li>Designed for easy note taking and follow up on your phone
                while you are away from your desk or computer.</li>
            </ul>
          </div>
        </div>
        <div style={style.sectionEven}>
          <p>
            Create a free account using Google
          </p>
          <RaisedButton
            primary={true}
            label="Login / Sign up"
            onTouchTap={this.props.openAuth}
          />
        </div>
        <div style={style.sectionOdd}>
          <div>
            <h3>Dashboard</h3>
            <img
              src={dashboardScreenshot}
              alt="dashboard screenshot"
              style={style.screenshot}
            />
            <p>See recent meetings and pending follow up items at a glance</p>
          </div>
          <div>
            <h3>List of Direct Reports</h3>
            <img
              src={directsScreenshot}
              alt="directs screenshot"
              style={style.screenshot}
            />
            <p>Quickly record one on ones from list of direct reports.</p>
          </div>
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
