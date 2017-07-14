import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { white } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

import {SORT_BY_NAME, SORT_BY_TEAM_NAME} from '../../constants/sort';

/**
 * @description PropTypes for DirectSort
 * @type {{handleChange: (*)}}
 */
const propTypes = {
  handleChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

/**
 * @class DirectSort
 * @extends React.Component
 * @description Render component
 */
class DirectSort extends Component {

  /**
   * @description handle on change
   * @param {Object} e synthetic event
   * @param {String} val new value
   */
  handleOnChange = (e, val) => {
    this.props.handleChange(val);
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const icon = (
      <IconButton>
        <FontIcon color={white} className="material-icons">sort</FontIcon>
      </IconButton>
    );
    return (
      <div>
        <IconMenu
          iconButtonElement={icon}
          onChange={this.handleOnChange}
          value={this.props.selected}
        >
          <MenuItem value={SORT_BY_NAME} primaryText="Sort By Direct Name" />
          <MenuItem value={SORT_BY_TEAM_NAME} primaryText="Sort By Team Name" />
        </IconMenu>
      </div>
    );
  }
}

DirectSort.propTypes = propTypes;

export default DirectSort;
