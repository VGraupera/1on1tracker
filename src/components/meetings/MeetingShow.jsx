import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import meetingActions from '../../actions/meetings';
import * as headerActions from '../../actions/header';

class MeetingShow extends Component {
  constructor() {
    super();
    this.onEdit = this.onEdit.bind(this);
  }

  componentDidMount() {
    this.props.find(this.props.params.id);
    this.props.setText('Show Meeting');
  }

  onEdit() {
    this.context.router.push(`/meetings/${this.props.params.id}/edit`);
  }

  directByKey(key) {
    const index = this.props.directsKeys.findIndex(k => k === key);
    return this.props.directs[index];
  }

  render() {
    const { meeting, loading, error } = this.props;

    if (loading) {
      return <div className="container">Loading...</div>;
    } else if (error) {
      return <div className="container">{error.message}</div>;
    } else if (!meeting) {
      return <span>No Meeting</span>;
    }

    const direct = this.directByKey(meeting.directKey);
    return (
      <div className="container">
        <Card>
          <CardTitle
            title={`Meeting with ${direct.name}`}
            subtitle={new Date(meeting.meetingDate).toLocaleDateString()}
          />

          <CardText>
            <h2>Direct&apos;s Notes</h2>
            {meeting.directsNotes ? (
              <pre>{meeting.directsNotes}</pre>
            ) : 'None' }
          </CardText>
          <CardText>
            <h2>Manager&apos;s Notes</h2>
            {meeting.managersNotes ? (
              <pre>{meeting.managersNotes}</pre>
            ) : 'None' }
          </CardText>
          <CardActions>
            <FlatButton label="Edit" onTouchTap={this.onEdit} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

MeetingShow.contextTypes = {
  router: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    meeting: state.meetings.activeMeeting,
    directs: state.directs.list,
    directsKeys: state.directs.keys,
    loading: state.meetings.loading,
    error: state.meetings.error,
  };
};


export default connect(mapStateToProps,
  { find: meetingActions.find,
    setText: headerActions.setText,
  })(MeetingShow);
