import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import MeetingForm, { validate } from './MeetingForm';
import meetingActions from '../../actions/meetings';

class MeetingEdit extends Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
        <h2>Edit Meeting</h2>
        <MeetingForm
          {...this.props}
          onSubmit={this.onSubmit}
          onDelete={this.onDelete}
        />
        <RaisedButton label="Delete"
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
  params: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const meeting = state.meetings.activeMeeting;
  const initialValues = { ...meeting,
    meetingDate: meeting.meetingDate ? new Date(meeting.meetingDate) : null,
  };
  return {
    initialValues,
    formType: 'edit',
    error: state.meetings.error,
    directs: state.directs.list,
    directsKeys: state.directs.keys,
  };
};

const mapDispatchToProps = {
  update: meetingActions.update,
  remove: meetingActions.remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'meeting', validate })(MeetingEdit));
