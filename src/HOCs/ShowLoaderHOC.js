import React from 'react';
import './ShowLoaderHOC.css';

/**
 * @description Loader show/hide HOC.
 * @param {String} propKey
 * @param {*} expectedValue
 * @return {XML} Loader | WrappedComponent
 */
const ShowLoaderHOC = (propKey, expectedValue) => (WrappedComponent) => {
  /**
   * @function Loader
   * @param props
   * @returns {XML}
   */
  function Loader(props) {
    const loader = (
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    );

    return props[propKey] === expectedValue ? loader : <WrappedComponent {...props} />;
  }

  return Loader;
};


export default ShowLoaderHOC;
