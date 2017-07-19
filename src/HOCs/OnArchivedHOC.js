import React from 'react';
import { connect } from 'react-redux';

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
    const { isArchived,dispatch, ...restProps } = props;
    if (isArchived && hide) {
      return null;
    }

    if(!isArchived && !hide){
      return null;
    }

    return <WrappedComponent {...restProps} />;
  }

  const mapStateToProps = (appState) => {
    const { state } = appState.routing.locationBeforeTransitions;
    return {
      isArchived: state && state.isArchived,
    };
  };

  return connect(mapStateToProps)(ShowHideOnArchived);
};

export default OnArchivedHOC;
