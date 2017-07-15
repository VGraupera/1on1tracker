import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DirectSortContainer from './DirectSortBtnContainer';
import TeamBackBtn from './TeamBackBtn';

/**
 * @description PropTypes for HeaderRightIcon
 * @type {{location: (*)}}
 */
const propType = {
  location: PropTypes.object.isRequired,
};

/**
 * @class HeaderRightIcon
 * @extends React.Component
 * @description Render component
 */
class HeaderRightIcon extends Component {

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { pathname } = this.props.location;
    let icon;
    switch (pathname) {
      case '/directs':
        icon = <DirectSortContainer />;
        break;
      case '/teams':
        icon = <TeamBackBtn location={this.props.location} />;
        break;
      default:
        icon = null;
    }
    return icon;
  }
}

HeaderRightIcon.propTypes = propType;

export default HeaderRightIcon;
