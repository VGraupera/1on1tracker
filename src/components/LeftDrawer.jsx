import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Auth from './Auth';
import { isAuthenticated } from '../actions/auth';


class LeftDrawer extends Component {
  render() {
    let signedInItems;
    if (isAuthenticated(this.props)) {
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
        <MenuItem
          onTouchTap={() => {
            if (isAuthenticated(this.props)) {
              this.props.handleNavigate('/directs');
            } else {
              this.props.handleNavigate('/');
            }
          }}
        >
          <h2>1on1 Tracker</h2>
        </MenuItem>
        {signedInItems}
        <Divider />
        <MenuItem
          onTouchTap={() => this.props.handleNavigate('/about')}
          primaryText="About"
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
