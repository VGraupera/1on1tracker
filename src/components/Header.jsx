import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

import * as types from '../actions/types';

class Header extends Component {
  returnHome = () => {
    if (this.props.auth.status !== types.AUTH_LOGGED_IN) {
      this.context.router.push('/');
    } else {
      // push from react-router-redux is not working here with material-ui
      this.context.router.push('/directs');
    }
  }

  render() {
    return (
        <AppBar style={{ position: 'fixed', top: 0 }}
          title={this.props.header.text}
          onTitleTouchTap={this.returnHome}
          onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}
        />
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    header: state.header,
  };
};

export default connect(mapStateToProps)(Header);
