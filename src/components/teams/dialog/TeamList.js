import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { red500, red200 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

import TeamItem from '../TeamItem';

/**
 * @description propTypes for TeamList
 * @type {Object}
 */
const propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
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
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { list, clickOnItem, onDelete } = this.props;
    return (
      <List>
        {list.length === 0 && <ListItem key="no_item" primaryText="No items" /> }
        { list.length !== 0 && list.map((team) => {
          return (
            <ListItem
              key={team.id}
              primaryText={team.name}
              onTouchTap={() => clickOnItem(team)}
              rightIconButton={
                <IconButton
                  touch={true}
                  onTouchTap={() => onDelete(team.id)}
                  disabled={!team.allowedDelete}
                >
                  <ActionDelete
                    color={red500}
                    hoverColor={red200}
                  />
                </IconButton>
              }
            />
          );
        })}

      </List>
    )
  }
}

TeamList.propTypes = propTypes;

export default TeamList;
