import React, { Component } from 'react';
import reactCSS from 'reactcss';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
import { red400 } from 'material-ui/styles/colors';
import { GithubPicker } from 'react-color';
import PropTypes from 'prop-types';

/**
 * @description PropTypes for DirectColorPicker
 * @type {{input, floatingLabelText: shim, hintText: shim}}
 */
const propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  floatingLabelText: PropTypes.string,
  hintText: PropTypes.string,
};

/**
 * @description default props for DirectColorPicker
 * @type {{floatingLabelText: string, hintText: string}}
 */
const defaultProps = {
  floatingLabelText: '',
  hintText: '',
};

/**
 * @class DirectColorPicker
 * @extends React.Component
 * @description Render component
 */
class DirectColorPicker extends Component {

  state = {
    displayColorPicker: false,
    color: this.props.input.value,
  };

  /**
   * @description Handle click . Open/close color picker
   */
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  /**
   * @description Handle Close. Close color picker
   */
  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  /**
   * @description Handle change color
   * @param {String} color new choosen color
   */
  handleChange = (color) => {
    this.setState({ color: color.hex });
    this.props.input.onChange(color.hex);
    this.handleClose();
  };

  /**
   * @description Handle clear color
   */
  handleClear = () => {
    this.setState({ color: '' });
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: '80px',
          height: '14px',
          borderRadius: '2px',
          background: `${this.state.color}`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
          marginRight: '10px',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });
    let clearBtn = null;
    if (this.state.color) {
      clearBtn = (
        <IconButton
          onTouchTap={this.handleClear}
          tooltip="clear"
          style={{ padding: '0px', width: '10px', height: '10px' }}
        >
          <ContentClear color={red400} viewBox="0 0 30 20" />
        </IconButton>
      );
    }
    const colorPicker = (
      <div>
        <div style={styles.swatch} onClick={this.handleClick} tabIndex="0" role="button" >
          <div style={styles.color} />
        </div>
        {clearBtn}
        { this.state.displayColorPicker ? <div style={styles.popover}>
          <div style={styles.cover} onClick={this.handleClose} tabIndex="0" role="button" />
          <GithubPicker color={this.state.color} onChange={this.handleChange} />
        </div> : null }
      </div>
    );

    return (
      <div>
        <TextField
          floatingLabelText={this.props.floatingLabelText}
          hintText={this.props.hintText}
          inputStyle={{ display: 'none' }}
          underlineShow={false}
          floatingLabelStyle={{ top: '10%' }}
          style={{ height: '28px', width: '10%' }}
        />
        {colorPicker}
      </div>
    );
  }
}

DirectColorPicker.defaultProps = defaultProps;
DirectColorPicker.propTypes = propTypes;

export default DirectColorPicker;
