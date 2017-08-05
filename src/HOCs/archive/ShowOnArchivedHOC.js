import React from 'react';
import PropTypes from 'prop-types';

import OnArchivedContainerHOC from './OnArchivedContainerHOC';


const propTypes = {
  isArchived: PropTypes.bool,
};


const defaultProps = {
  isArchived: false,
};

const ShowOnArchivedHOC = (WrappedComponent) => {

  function ShowOnArchived(props) {
    const { isArchived, ...restProps } = props;

    if (!isArchived) {
      return null;
    }

    return <WrappedComponent {...restProps} {...isArchived} />;
  }

  ShowOnArchived.propTypes = propTypes;
  ShowOnArchived.defaultProps = defaultProps;

  return OnArchivedContainerHOC(ShowOnArchived);
};

export default ShowOnArchivedHOC;
