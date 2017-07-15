import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { red500, red200 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';


/**
 * @description propTypes for TeamItem
 * @type {{id: (*), name: (*), handleOnClickItem: (*)}}
 */
const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  allowedDelete: PropTypes.bool.isRequired,
  handleOnClickItem: PropTypes.func.isRequired,
  handleOnClickDelete: PropTypes.func.isRequired,
};

/**
 * @class TeamItem
 * @extends React.Component
 * @description Render component
 */
class TeamItem extends Component {

  /**
   * @description handle click on item row
   */
  handleOnClickItem = () => {
    this.props.handleOnClickItem(this.props.id);
  };

  /**
   * @description handle click on delete icon
   */
  handleOnClickDelete = () => {
    this.props.handleOnClickDelete(this.props.id);
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { id, name, allowedDelete } = this.props;
    return (
      <ListItem
        key={id}
        onTouchTap={this.handleOnClickItem}
        primaryText={name}
        rightIconButton={
          <IconButton
            touch={true}
            disabled={!allowedDelete}
            onTouchTap={this.handleOnClickDelete}
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
