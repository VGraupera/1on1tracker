import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Auth from './Auth';
import * as types from '../actions/types';

class LeftDrawer extends Component {
  render() {
    let signedInItems;
    if (this.props.auth.status === types.AUTH_LOGGED_IN) {
      signedInItems = (
        <div>
          <MenuItem
            primaryText={this.props.auth.username}
          />
          <MenuItem>
            <Auth />
          </MenuItem>
        </div>
      );
    }

    return (
      <Drawer
        open={this.props.open}
        docked={false}
        onRequestChange={this.props.onRequestChange}
      >
        <MenuItem>
          <h2>1on1 Tracker</h2>
        </MenuItem>
        {signedInItems}
        <Divider />
        <MenuItem
          onTouchTap={() => this.props.handleNavigate('/about')}
          primaryText='About'
        />
      </Drawer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(LeftDrawer);
