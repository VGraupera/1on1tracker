import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isDirty, hasSubmitSucceeded } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter, browserHistory } from 'react-router';
import MeetingForm from './MeetingForm';

import meetingActions from '../../actions/meetings';

class MeetingEdit extends Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.warnIfUnsavedChanges = this.warnIfUnsavedChanges.bind(this);
  }

  componentDidMount() {
    this.props.router.setRouteLeaveHook(
      this.props.route,
      this.warnIfUnsavedChanges,
    );
    window.onbeforeunload = () => this.warnIfUnsavedChanges();
  }

  componentDidUpdate(prevProps) {
    if (this.props.route.path !== prevProps.route.path) {
      this.props.router.setRouteLeaveHook(
        this.props.route,
        this.warnIfUnsavedChanges,
      );
    }
  }

  onDelete(event) {
    event.preventDefault(); // Fix double touchtap bug
    browserHistory.push('/meetings');
    this.props.remove(this.props.params.id).then(() => {
    });
  }

  onSubmit(meeting) {
    if (meeting.meetingDate instanceof Date) {
      meeting.meetingDateReverse = 0 - meeting.meetingDate;
      meeting.meetingDate = meeting.meetingDate.toISOString();
    }
    this.props.update(this.props.params.id, meeting).then(() => {
      browserHistory.goBack();
    });
  }

  warnIfUnsavedChanges(nextLocation) {
    if (this.props.dirty && !this.props.submitted) {
      return 'Are you sure you want to leave this page? You have unsaved changes.';
    }
  }

  render() {
    return (
      <div className="container">
        <MeetingForm
          {...this.props}
          onSubmit={this.onSubmit}
        />
        <RaisedButton
          label="Delete"
          secondary={true}
          onTouchTap={this.onDelete}
          style={{
            marginTop: 20,
            marginBottom: 30,
            width: '100%' }}
        />
      </div>
    );
  }
}

MeetingEdit.propTypes = {
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  dirty: PropTypes.bool.isRequired,
  submitted: PropTypes.bool.isRequired,
  router: PropTypes.shape({
    setRouteLeaveHook: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => {
  const meeting = state.meetings.activeMeeting;
  const initialValues = {
    ...meeting,
    meetingDate: meeting.meetingDate ? new Date(meeting.meetingDate) : null,
  };
  return {
    initialValues,
    formType: 'edit',
    dirty: isDirty('meeting')(state),
    submitted: hasSubmitSucceeded('meeting')(state),
    error: state.meetings.error,
    directs: state.directs.list,
  };
};

const mapDispatchToProps = {
  update: meetingActions.update,
  remove: meetingActions.remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MeetingEdit));
