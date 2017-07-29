import React, { Component } from 'react';
import ReactRTE from 'react-rte';
import { TextField } from 'redux-form-material-ui';
import PropTypes from 'prop-types';

/**
 * @description propTypes for ReachTextEditor
 * @type {{input}}
 */
const propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  floatingLabelText: PropTypes.string.isRequired,
};

/**
 * @description component Style
 * @type {Object}
 */
const style = {
  wrapperDiv: { marginTop: 10, marginBottom: 10 },
  inputStyle: { display: 'none' },
  floatingLabelStyle: { top: '10%' },
  textFieldStyle: { height: '28px', width: '100%' },
};

/**
 * @class ReachTextEditor
 * @extends React.Component
 * @description Render component
 */
class ReachTextEditor extends Component {

  state = {
    value: this.props.input.value ? ReactRTE.createValueFromString(this.props.input.value, 'html') : ReactRTE.createEmptyValue(),
  };

  /**
   * @description Handle Change in react-rte and pass to redux-form
   * @param {Object} value react-rte value obect
   */
  handleChange = (value) => {
    this.setState({ value });
    this.props.input.onChange(value.toString('html'));
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    return (
      <div style={style.wrapperDiv}>
        <TextField
          floatingLabelText={this.props.floatingLabelText}
          inputStyle={style.inputStyle}
          underlineShow={false}
          floatingLabelStyle={style.floatingLabelStyle}
          style={style.textFieldStyle}
        />
        <ReactRTE value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

ReachTextEditor.propTypes = propTypes;

export default ReachTextEditor;
