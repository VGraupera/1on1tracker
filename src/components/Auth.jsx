import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import * as types from '../actions/types';
import { openAuth, logoutUser } from '../actions/auth';

class Auth extends Component {
  // static muiName = 'FlatButton';

  render() {
    switch (this.props.auth.status) {
      case types.AUTH_LOGGED_IN: return (
        <FlatButton label="Log out" onTouchTap={this.props.logoutUser} />
        );
      case types.AUTH_AWAITING_RESPONSE: return (
        <FlatButton label="Authenticating" />
      );
      default: return (
        <FlatButton label="Login" onTouchTap={this.props.openAuth} />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {
  openAuth,
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
