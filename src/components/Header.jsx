import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

import { isAuthenticated, rootPath } from '../actions/auth';
import HeaderRightIcon from './header/HeaderRightIcon';


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
        iconElementRight={<HeaderRightIcon location={this.context.router.location} />}
      />
    );
  }
}

Header.propTypes = {
  onLeftIconButtonTouchTap: PropTypes.func.isRequired,
  header: PropTypes.object,
};

Header.contextTypes = {
  router: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    header: state.header,
  };
};

export default connect(mapStateToProps)(Header);
