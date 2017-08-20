import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { red500, red200 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

const propTypes = {
  team: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  clickOnItem: PropTypes.func.isRequired,
};

/**
 * @class TeamItem
 * @extends React.Component
 * @description Render component
 */
class TeamItem extends Component {

  handleClickOnItem = () => {
    const { team, clickOnItem } = this.props;
    clickOnItem(team);
  };

  handleOnDelete = () => {
    const { team, onDelete } = this.props;
    onDelete(team.id);
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { id, name, allowedDelete } = this.props.team;
    return (
      <ListItem
        key={id}
        primaryText={name}
        onTouchTap={this.handleClickOnItem}
        rightIconButton={
          <IconButton
            touch={true}
            onTouchTap={this.handleOnDelete}
            disabled={!allowedDelete}
          >
            <ActionDelete
              color={red500}
              hoverColor={red200}
            />
          </IconButton>
        }
      />
    );
  }
}

TeamItem.propTypes = propTypes;

export default TeamItem;
