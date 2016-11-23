import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import * as types from '../actions/types';

class LeftDrawer extends Component {
  render() {

    let signedInItems ;
    if (this.props.auth.status === types.AUTH_LOGGED_IN) {
      signedInItems =  (
        <div>
          <MenuItem
            primaryText={this.props.auth.username} />
          <Divider />
          <MenuItem
            onTouchTap={() => this.props.handleNavigate('/directs')}
            primaryText='Direct Reports' />
          <MenuItem
            onTouchTap={() => this.props.handleNavigate('/meetings')}
            primaryText='Meetings' />
          <Divider />
        </div>
      )
    }

    return (
      <div>
        <Drawer
          open={this.props.open}
          docked={false}
          onRequestChange={this.props.onRequestChange}
        >
          {signedInItems}
          <MenuItem
            onTouchTap={() => this.props.handleNavigate('/about')}
            primaryText='About' />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(LeftDrawer);

