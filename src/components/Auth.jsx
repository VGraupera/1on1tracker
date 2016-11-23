import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openAuth, logoutUser } from '../actions/auth';
import * as types from '../actions/types';
import FlatButton from 'material-ui/FlatButton';

class Auth extends Component {
  static muiName = 'FlatButton';

  render() {
    switch (this.props.auth.status) {
      case types.AUTH_LOGGED_IN: return (
        <FlatButton {...this.props} label="Log out" onTouchTap={this.props.logoutUser} />
        );
      case types.AUTH_AWAITING_RESPONSE: return (
        <FlatButton {...this.props} label="Authenticating" />
      );
      default: return (
        <FlatButton {...this.props} label="Login" onTouchTap={this.props.openAuth} />
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
