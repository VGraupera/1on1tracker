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
  const ShowOnArchived = (props) => {
    const { isArchived, ...restProps } = props;

    if (!isArchived) {
      return null;
    }

    return <WrappedComponent {...restProps} {...{ isArchived }} />;
  };

  ShowOnArchived.propTypes = propTypes;
  ShowOnArchived.defaultProps = defaultProps;

  return ShowOnArchived;
};

/**
 * @description Show wrapped component when is isArchived prop true
 * @param WrappedComponent
 * @constructor
 */
const ShowOnArchivedHOC = (WrappedComponent) => {
  return ArchiveHocFactory(WrappedComponent, componentFactory);
};

export default ShowOnArchivedHOC;
