import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import MeetingForm, { validate } from './MeetingForm';
import meetingActions from '../../actions/meetings';

class MeetingNew extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.reset();
  }

  onSubmit(meeting) {
    if (meeting.meetingDate instanceof Date) {
      meeting.meetingDate = meeting.meetingDate.toISOString();
    }
    this.props.create(meeting);
  }

  render() {
    return (
      <div className="container">
        <h2>New Meeting</h2>
        <MeetingForm {...this.props} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

MeetingNew.propTypes = {
  create: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const initialValues = {
    directKey: state.directs.activeDirectKey,
    meetingDate: new Date(),
  };
  return {
    initialValues,
    formType: 'create',
    error: state.meetings.error,
    directs: state.directs.list,
    directsKeys: state.directs.keys,
  };
};

export default connect(mapStateToProps,
                       { create: meetingActions.create,
                         reset: meetingActions.resetActive })(reduxForm({ form: 'meeting', validate })(MeetingNew));
