import React, { Component } from 'react';
import { isDirty, hasSubmitSucceeded } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router';
import MeetingForm from './MeetingForm';

import meetingActions from '../../actions/meetings';
import * as headerActions from '../../actions/header';

class MeetingEdit extends Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.warnIfUnsavedChanges = this.warnIfUnsavedChanges.bind(this);
  }

  componentDidMount() {
    this.props.setText('Edit Meeting');
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

  onDelete() {
    this.props.remove(this.props.params.id);
  }

  onSubmit(meeting) {
    if (meeting.meetingDate instanceof Date) {
      meeting.meetingDateReverse = 0 - meeting.meetingDate;
      meeting.meetingDate = meeting.meetingDate.toISOString();
    }
    this.props.update(this.props.params.id, meeting);
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
          style={{ marginTop: 20 }}
          onTouchTap={this.onDelete}
        />
      </div>
    );
  }
}

MeetingEdit.propTypes = {
  update: React.PropTypes.func.isRequired,
  remove: React.PropTypes.func.isRequired,
  setText: React.PropTypes.func.isRequired,
  params: React.PropTypes.object.isRequired,
  route: React.PropTypes.object.isRequired,
  dirty: React.PropTypes.bool.isRequired,
  submitted: React.PropTypes.bool.isRequired,
  router: React.PropTypes.shape({
    setRouteLeaveHook: React.PropTypes.func,
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
  setText: headerActions.setText,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MeetingEdit));
