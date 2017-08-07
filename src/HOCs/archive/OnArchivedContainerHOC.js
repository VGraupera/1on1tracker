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

export const mapStateToProps = state => ({
  isArchived: getIsArchived(state),
});

export const componentFactory = (WrappedComponent) => {
  function OnArchivedContainer(props) {
    const { dispatch, ...restProps } = props;
    return <WrappedComponent {...restProps} />;
  }

  OnArchivedContainer.propTypes = propTypes;
  OnArchivedContainer.defaultProps = defaultProps;
  return OnArchivedContainer;
};

/**
 * @description HOC provide props over redux connect function
 * @param WrappedComponent
 * @return {XML}
 uctor
 */
const OnArchivedContainerHOC = (WrappedComponent) => {
  const OnArchivedContainer = componentFactory(WrappedComponent);

  return connect(mapStateToProps)(OnArchivedContainer);
};

export default OnArchivedContainerHOC;
