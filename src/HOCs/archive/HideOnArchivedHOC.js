import React from 'react';
import PropTypes from 'prop-types';

import OnArchivedContainerHOC from './OnArchivedContainerHOC';

/**
 * @description proptypes for ShowHideOnArchived
 * @type {{isArchived: (*)}}
 */
const propTypes = {
  isArchived: PropTypes.bool,
};

/**
 * @description Default props for ShowHideOnArchived
 * @type {{isArchived: boolean}}
 */
const defaultProps = {
  isArchived: false,
};

/**
 * @description Show/Hide Wrapped component
 * @param {Boolean} hide if true it will hide Wrapped Component when isArchived true
 */
const HideOnArchivedHOC = (WrappedComponent) => {
  /**
   * @function HideOnArchived
   * @param {Object} props
   * @returns {XML}
   */
  function HideOnArchived(props) {
    const { isArchived, ...restProps } = props;
    if (isArchived) {
      return null;
    }

    return <WrappedComponent {...restProps} {...isArchived} />;
  }

  HideOnArchived.propTypes = propTypes;
  HideOnArchived.defaultProps = defaultProps;

  return OnArchivedContainerHOC(HideOnArchived);
};

export default HideOnArchivedHOC;
