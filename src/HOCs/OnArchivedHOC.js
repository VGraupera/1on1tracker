import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getIsArchived } from '../selectors/routing';

/**
 * @description proptypes for ShowHideOnArchived
 * @type {{isArchived: (*)}}
 */
const propTypes = {
  isArchived: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
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

    return <WrappedComponent {...restProps} {...isArchived } />;
  }

  ShowHideOnArchived.propTypes = propTypes;
  ShowHideOnArchived.defaultProps = defaultProps;

  const mapStateToProps = state => ({
    isArchived: getIsArchived(state),
  });

  return connect(mapStateToProps)(ShowHideOnArchived);
};

export default OnArchivedHOC;
