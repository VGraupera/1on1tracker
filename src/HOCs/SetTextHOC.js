import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as headerActions from '../actions/header';

/**
 * @description High Order Component for set Header
 * @param {XML} WrappedComponent
 * @param text
 * @return {XML} return react component
 * @constructor
 */
const SetTextHOC = (WrappedComponent, text) => {
  /**
   * @description propTypes for SetText component
   * @type {{setText: (*)}}
   */
  const propTypes = {
    setText: PropTypes.func.isRequired,
  };
  /**
   * @class SetText
   * @extends React.Component
   * @description Render component
   */
  class SetText extends Component {

    componentDidMount() {
      this.props.setText(text);
    }

    /**
     * @description render
     * @return {Object} JSX HTML Content
     */
    render() {
      const { setText,dispatch, ...props } = this.props;
      return <WrappedComponent {...props} />;
    }
  }

  SetText.propTypes = propTypes;

  const mapDispatchToProps = dispatch => ({
    setText: (settedText) => {
      dispatch(headerActions.setText(settedText));
    },
  });

  return connect(null, mapDispatchToProps)(SetText);
};

export default SetTextHOC;
