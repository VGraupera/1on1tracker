import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

import DirectForm, { validate } from './DirectForm';
import directActions from '../../actions/directs';
import * as headerActions from '../../actions/header';
import { getTeamsArray } from '../../selectors/teams';

class DirectNew extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }

  componentDidMount() {
    this.props.setText('New Direct');
  }

  onSubmit(direct) {
    this.props.create(direct).then(() => {
      browserHistory.goBack();
    });
  }

  onCancelClick(event) {
    event.preventDefault(); // Fix double touchtap bug
    browserHistory.goBack();
  }

  render() {
    return (
      <div className="container">
        <DirectForm {...this.props} onSubmit={this.onSubmit} />
        <RaisedButton
          label="Cancel"
          style={{ marginTop: 20 }}
          onTouchTap={this.onCancelClick}
          />
          <div>* Indicates required field</div>
      </div>
    );
  }
}

DirectNew.propTypes = {
  create: PropTypes.func.isRequired,
  setText: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    formType: 'create',
    error: state.directs.error,
    teams: getTeamsArray(state),
  };
};

const mapDispatchToProps = {
  create: directActions.create,
  setText: headerActions.setText,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(reduxForm({ form: 'direct', validate })(DirectNew));
