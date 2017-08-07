import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DirectSortContainer from './DirectSortBtnContainer';
import MeetingNavigationIconsContainers from './MeetingNavigationIconsContainers';

/**
 * @description PropTypes for HeaderRightIcon
 * @type {{location: (*)}}
 */
const propType = {
  router: PropTypes.object.isRequired,
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
    const { location } = this.props.router;
    const { pathname } = location;
    let icon;

    switch (pathname) {
      case '/directs':
        icon = <DirectSortContainer />;
        break;
      case (((route) => {
        return `/meetings/${route.params.id}`;
      })(this.props.router)):
        icon = <MeetingNavigationIconsContainers id={this.props.router.params.id} />;
        break;
      default:
        icon = null;
    }

    return icon;
  }
}

HeaderRightIcon.propTypes = propType;

export default HeaderRightIcon;
