import React from 'react';
import { connect } from 'react-redux';

import { getIsArchived } from '../selectors/routing';

/**
 * @description Show/Hide Wrapped component
 * @param {Boolean} hide is true it will hide Wrapped Component when isArchived true
 */
const OnArchivedHOC = (hide = true) => (WrappedComponent) => {
  /**
   * @function HideOnArchived
   * @param {Object} props
   * @returns {XML}
   */
  function ShowHideOnArchived(props) {
    const { isArchived, dispatch, ...restProps } = props;
    if (isArchived && hide) {
      return null;
    }

    if (!isArchived && !hide) {
      return null;
    }

    return <WrappedComponent {...restProps} />;
  }

  const mapStateToProps = state => ({
    isArchived: getIsArchived(state),
  });

  return connect(mapStateToProps)(ShowHideOnArchived);
};

export default OnArchivedHOC;
