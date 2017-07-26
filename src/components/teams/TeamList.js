import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

import TeamItem from './TeamItem';

/**
 * @description propTypes for TeamList
 * @type {Object}
 */
const propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  })).isRequired,
  handleOnClickDelete: PropTypes.func.isRequired,
};

/**
 * @class TeamList
 * @extends React.Component
 * @description Render component
 */
class TeamList extends Component {

  /**
   * @description TeamList state.
   * @type {{dialogOpen: boolean, teamForDelete: null}}
   */
  state = {
    dialogOpen: false,
    teamForDelete: null,
  };

  /**
   * @description Handle onClick team item
   * @param {Number} id team id
   * @return {Function} new route
   */
  handleOnClickItem = (id) => {
    browserHistory.push(`teams/edit/${id}`);
  };

  /**
   * @description handle delete action
   */
  handleOnClickDelete = () => {
    this.props.handleOnClickDelete(this.state.teamForDelete);
    this.handleCloseDialog();
  };

  /**
   * @description open delete confirm dialog
   * @param {String} id team id
   */
  handleOpenDialog = (id) => {
    this.setState({ dialogOpen: true, teamForDelete: id });
  };

  /**
   * @description close delete confirm dialog
   */
  handleCloseDialog = () => {
    this.setState({ dialogOpen: false, teamForDelete: null });
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const buttonStyle = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 76,
      left: 'auto',
      position: 'fixed',
    };
    const { teams } = this.props;
    const teamList = teams.map(team => (
      <TeamItem
        key={team.id}
        id={team.id}
        name={team.name}
        allowedDelete={team.allowedDelete}
        handleOnClickItem={this.handleOnClickItem}
        handleOnClickDelete={this.handleOpenDialog}
      />
    ));
    const noItems = <ListItem primaryText="No Teams" />;
    const content = teamList.length ? teamList : noItems;

    const dialogActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleCloseDialog}
      />,
      <FlatButton
        label="Delete"
        primary={true}
        onTouchTap={this.handleOnClickDelete}
      />,
    ];

    return (
      <div className="container meetings">
        <List>
          {content}
          <FloatingActionButton
            style={buttonStyle}
            containerElement={<Link to="/teams/new" />}
          >
            <ContentAdd />
          </FloatingActionButton>
        </List>
        <Dialog
          actions={dialogActions}
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={this.handleCloseDialog}
        >
          Delete the team?
        </Dialog>
      </div>);
  }
}

TeamList.propTypes = propTypes;

export default TeamList;
