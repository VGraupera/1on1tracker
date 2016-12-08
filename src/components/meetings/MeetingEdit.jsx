import React, { Component, PropTypes } from 'react';
import {
  reduxForm,
  isDirty,
 } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import MeetingForm, { validate } from './MeetingForm';
import { withRouter } from 'react-router';

import meetingActions from '../../actions/meetings';
import * as headerActions from '../../actions/header';

class MeetingEdit extends Component {

  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.warnIfUnsavedChanges = this.warnIfUnsavedChanges.bind(this);
  }

  componentWillMount() {
    this.props.router.setRouteLeaveHook(this.props.location, (route) => this.warnIfUnsavedChanges(route));
    window.onbeforeunload = () => this.warnIfUnsavedChanges();
  }

  componentDidMount() {
    this.props.setText('Edit Meeting');
  }

  componentDidUpdate(prevProps) {
    if (this.props.route.path !== prevProps.route.path) {
      this.props.router.setRouteLeaveHook(this.props.route, (route) => this.warnIfUnsavedChanges(route));
    }
  }

  warnIfUnsavedChanges(route) {
    if (this.props.dirty)
      return 'Are you sure you want to leave this page? You have unsaved changes.';
  }

  onDelete() {
    this.props.remove(this.props.params.id);
  }

  onSubmit(meeting) {
    this.props.update(this.props.params.id, meeting);
  }

  render() {
    return (
      <div className="container">
        <MeetingForm
          {...this.props}
          onSubmit={this.onSubmit}
          onDelete={this.onDelete}
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
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  setText: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  router: PropTypes.shape({
    setRouteLeaveHook: PropTypes.func,
  }).isRequired,
  route: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

const mapStateToProps = (state) => {
  const meeting = state.meetings.activeMeeting;
  const initialValues = { ...meeting,
    meetingDate: meeting.meetingDate ? new Date(meeting.meetingDate) : null,
  };
  return {
    initialValues,
    formType: 'edit',
    dirty: isDirty('meeting')(state),
    error: state.meetings.error,
    directs: state.directs.list,
    directsKeys: state.directs.keys,
  };
};

const mapDispatchToProps = {
  update: meetingActions.update,
  remove: meetingActions.remove,
  setText: headerActions.setText,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'meeting', validate })(MeetingEdit)));
