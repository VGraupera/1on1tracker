import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import MeetingForm from './MeetingForm';
import meetingActions from '../../actions/meetings';

class MeetingNew extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    if (!this.props.initialValues.directKey) {
      this.props.initialValues.directKey = this.props.params.id;
    }
    this.props.reset();
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  onSubmit(meeting) {
    if (meeting.meetingDate instanceof Date) {
      meeting.meetingDateReverse = 0 - meeting.meetingDate;
      meeting.meetingDate = meeting.meetingDate.toISOString();
    }
    this.props.create(meeting).then(() => {
      browserHistory.goBack();
    });
  }

  render() {
    return (
      <div className="container">
        <MeetingForm
          {...this.props}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

MeetingNew.propTypes = {
  create: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const initialValues = {
    meetingDate: new Date(),
  };
  return {
    initialValues,
    formType: 'create',
    error: state.meetings.error,
    directs: state.directs.list,
  };
};

export default connect(
  mapStateToProps,
  { create: meetingActions.create,
    reset: meetingActions.resetActive,
  })(MeetingNew);
