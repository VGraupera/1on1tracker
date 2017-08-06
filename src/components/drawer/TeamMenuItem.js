import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import TeamCrudDialogBoxContainer from '../teams/dialog/TeamCrudDialogBoxContainer';
/**
 * @class TeamMenuItem
 * @extends React.Component
 * @description Render component
 */
class TeamMenuItem extends Component {

  state = {
    openDialog: false,
  };
  handleItemClick = () => {
    this.props.closeDrawer(false);
    this.setState({ openDialog: true });
  };
  handleCloseDialog = () => {
    this.setState({ openDialog: false });
  };
  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    return (
      <div>
        <MenuItem
          primaryText="Teams"
          onTouchTap={this.handleItemClick}
        />
        <TeamCrudDialogBoxContainer
          openDialog={this.state.openDialog}
          handleCloseDialog={this.handleCloseDialog}
        />
      </div>
    );
  }
}

export default TeamMenuItem;
