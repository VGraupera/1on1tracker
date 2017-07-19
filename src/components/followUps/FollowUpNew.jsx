import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import FollowUpForm from './FollowUpForm';
import followUpActions from '../../actions/followUps';

class FollowUpNew extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    if (!this.props.initialValues.directKey) {
      this.props.initialValues.directKey = this.props.params.id;
    }
    if (!this.props.initialValues.meetingKey && this.props.params.meetingId) {
      this.props.initialValues.meetingKey = this.props.params.meetingId;
    }
    this.props.reset();
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  onSubmit(followUp) {
    if (followUp.followUpDate instanceof Date) {
      followUp.followUpDateReverse = 0 - followUp.followUpDate;
      followUp.followUpDate = followUp.followUpDate.toISOString();
    }
    this.props.create(followUp).then(() => {
      browserHistory.goBack();
    });
  }

  render() {
    return (
      <div className="container">
        <FollowUpForm
          {...this.props}
          onSubmit={this.onSubmit}
        />
        <div>* Indicates required field</div>
      </div>
    );
  }
}

FollowUpNew.propTypes = {
  create: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const initialValues = {
    followUpDate: new Date(),
    meetingKey: null,
  };
  return {
    initialValues,
    formType: 'create',
    error: state.followUps.error,
    directs: state.directs.list,
  };
};

export default connect(mapStateToProps,
  { create: followUpActions.create,
    reset: followUpActions.resetActive,
  })(FollowUpNew);
