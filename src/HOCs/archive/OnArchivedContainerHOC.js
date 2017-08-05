import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getIsArchived } from '../../selectors/routing';


const propTypes = {
  isArchived: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

const defaultProps = {
  isArchived: false,
};

/**
 * @description OnArchivedContainer provide isArchived props
 * @param {Function} WrappedComponent wrapped react component
 */
const OnArchivedContainerHOC = (WrappedComponent) => {
  /**
   * @function HideOnArchived
   * @param {Object} props
   * @returns {XML}
   */
  function OnArchivedContainer(props) {
    const { dispatch, ...restProps } = props;
    return <WrappedComponent {...restProps} />;
  }

  OnArchivedContainer.propTypes = propTypes;
  OnArchivedContainer.defaultProps = defaultProps;

  const mapStateToProps = state => ({
    isArchived: getIsArchived(state),
  });

  return connect(mapStateToProps)(OnArchivedContainer);
};

export default OnArchivedContainerHOC;
