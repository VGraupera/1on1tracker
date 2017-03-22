import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import * as headerActions from '../actions/header';
import { openAuth } from '../actions/auth';

import heroImage from '../images/Cover.jpg';
import { brightGreen, brightGreen10 } from '../colors';
import dashboardScreenshot from '../images/dashboard.png';
import directsScreenshot from '../images/directs.png';

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
  },
  blurbs: {
    marginBottom: '50px',
  },
};

export class Home extends Component {
  componentDidMount() {
    this.props.setText('1on1 Tracker');
  }

  render() {
    return (
      <div className="home">
        <div style={style.hero} />
        <div style={style.heroText}>
          <h1 style={style.heroTitle}>Simple. Fast. Handy.</h1>
          <h2>One on One tracker for busy managers.</h2>
        </div>

        <div style={style.sectionOdd}>
          <h1 style={style.greenHeader}>We get it. One on one meetings are
            critical leading your team.</h1>
          <div style={style.divideTwo}>
            <ul style={style.blurbs}>
              <li>No more taking notes on paper that can get lost.</li>
              <li>Link follow up actions to direct reports and meetings.</li>
              <li>Designed for easy note taking and follow up on your phone
                while you are on the move.</li>
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
  setText: React.PropTypes.func.isRequired,
  openAuth: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  openAuth,
  setText: headerActions.setText,
};

export default connect(null, mapDispatchToProps)(Home);
