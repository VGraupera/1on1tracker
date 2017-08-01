import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

/**
 * @description css style for Loader
 * @type {Object}
 */
const style = {
  container: {
    position: 'absolute',
    top: '30%',
    left: '45%',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

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
      <div style={style.container}>

        <RefreshIndicator
          size={50}
          left={70}
          top={10}
          loadingColor="#FF9800"
          status="loading"
          style={style.refresh}
        />
      </div>
    );

    return props[propKey] === expectedValue ? loader : <WrappedComponent {...props} />;
  }

  return Loader;
};


export default ShowLoaderHOC;
