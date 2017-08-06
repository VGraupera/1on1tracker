import React from 'react';
import PropTypes from 'prop-types';

import ArchiveHocFactory from './ArchiveHocFactory';


const propTypes = {
  isArchived: PropTypes.bool,
};

const defaultProps = {
  isArchived: false,
};
export const componentFactory = (WrappedComponent) => {
  const HideOnArchived = (props) => {
    const { isArchived, ...restProps } = props;
    if (isArchived) {
      return null;
    }

    return <WrappedComponent {...restProps} {...{ isArchived }} />;
  };

  HideOnArchived.propTypes = propTypes;
  HideOnArchived.defaultProps = defaultProps;

  return HideOnArchived;
};

/**
 * @description Hide wrapped component when isArchived prop true
 * @param WrappedComponent
 */
const HideOnArchivedHOC = (WrappedComponent) => {
  return ArchiveHocFactory(WrappedComponent, componentFactory);
};

export default HideOnArchivedHOC;
