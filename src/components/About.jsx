import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as headerActions from '../actions/header';

import { brightGreen } from '../colors';

const style = {
  title: {
    color: brightGreen,
    fontSize: '1.5em',
  },
};

class About extends Component {
  componentDidMount() {
    this.props.setText('About');
  }

  render() {
    return (
      <div className="container about">
        <h1 style={style.title}>1on1tracker.com</h1>
        <p>If you find this useful, contact or follow
          me <a href="https://twitter.com/vgraupera">@vgraupera</a> or
          on <a href="https://www.linkedin.com/in/vidalgraupera/">linkedin</a>.
        </p>
        <p>
          Source code on <a href="https://github.com/VGraupera/1on1tracker">
            github</a>
        </p>
      </div>
    );
  }
}

About.propTypes = {
  setText: PropTypes.func.isRequired,
};

export default connect(null, { setText: headerActions.setText })(About);
