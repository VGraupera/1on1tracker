import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

import { TextField } from 'redux-form-material-ui';
import PropTypes from 'prop-types';

/**
 * @description propTypes for RichTextEditor
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
 * @class RichTextEditor
 * @extends React.Component
 * @description Render component
 */
class RichTextEditor extends Component {

  state = {
    value: this.props.input.value
  };

  /**
   * @description Handle Change in react-rte and pass to redux-form
   * @param {Object} value react-rte value obect
   */
  handleChange = (value) => {
    this.setState({ value });
    this.props.input.onChange(value);
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {

    const  modules = {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ],
    };

    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
    ];

    return (
      <div style={style.wrapperDiv}>
        <TextField
          floatingLabelText={this.props.floatingLabelText}
          inputStyle={style.inputStyle}
          underlineShow={false}
          floatingLabelStyle={style.floatingLabelStyle}
          style={style.textFieldStyle}
        />
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

RichTextEditor.propTypes = propTypes;

export default RichTextEditor;
