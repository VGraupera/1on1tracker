import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

import { isAuthenticated, rootPath } from '../actions/auth';

class Header extends Component {
  returnHome = () => {
    this.context.router.push(rootPath(isAuthenticated(this.props)));
  }

  render() {
    return (
      <AppBar
        style={{ position: 'fixed', top: 0 }}
        title={this.props.header.text}
        onTitleTouchTap={this.returnHome}
        onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}
      />
    );
  }
}

Header.propTypes = {
  onLeftIconButtonTouchTap: React.PropTypes.func.isRequired,
  header: React.PropTypes.object,
};

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
