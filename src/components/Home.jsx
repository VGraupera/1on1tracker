import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { openAuth } from '../actions/auth';

const Home = (props) => {
  return (
    <div className="container home">
      <p>
        Welcome, this is a one on one tracking app for managers and their direct reports.
      </p>
      <p>
        Create a free account using Google
      </p>
      <RaisedButton primary={true} label="Sign up" onTouchTap={props.openAuth} />
    </div>
  );
};

const mapDispatchToProps = {
  openAuth,
};

export default connect(null, mapDispatchToProps)(Home);
