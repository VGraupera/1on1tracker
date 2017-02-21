import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

import { isAuthenticated } from '../actions/auth';

class Header extends Component {
  returnHome = () => {
    if (isAuthenticated(this.props)) {
      this.context.router.push('/directs');
    } else {
      // push from react-router-redux is not working here with material-ui
      this.context.router.push('/');
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
