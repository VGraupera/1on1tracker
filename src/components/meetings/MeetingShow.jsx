import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Card,
  CardActions,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import {
  List,
  ListItem,
} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import FollowUpIcon from 'material-ui/svg-icons/action/assignment';
import { Link } from 'react-router';
import FollowUpItem from '../followUps/FollowUpItem';

import meetingActions from '../../actions/meetings';
import followUpActions from '../../actions/followUps';

import * as headerActions from '../../actions/header';

class MeetingShow extends Component {
  componentDidMount() {
    this.props.setText('Meeting');

    this.props.find(this.props.params.id);
    this.selectFollowUps();
  }

  selectFollowUps() {
    this.props.followUpsEqualTo('meetingKey', this.props.params.id);
  }

  renderFollowUps() {
    const rows = [];
    if (this.props.followUps) {
      rows.push(
        <Subheader>Followups from this Meeting</Subheader>
      );

      this.props.followUps.forEach((item, key) => {
        rows.push(
          <FollowUpItem
            key={key}
            followUp={item}
            id={key}
            primaryText={new Date(item.followUpDate).toLocaleDateString()}
            secondaryText={`${item.description || 'TBD'}`}
          />);
      });
    }
    return rows;
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

    const direct = this.props.directs.get(meeting.directKey);
    // TODO: this.props.directs can be []
    return (
      <div className="container">
        <Card>
          <CardTitle
            title={direct ? direct.name : '???'}
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
            <List>
              {this.renderFollowUps()}
            </List>
            <List>
              <ListItem
                primaryText="New Follow Up"
                leftIcon={<FollowUpIcon />}
                containerElement={<Link to={`/directs/${meeting.directKey}/meetings/${this.props.params.id}/followUps/new`} />}
              />
              <ListItem
                primaryText="Edit"
                leftIcon={<EditIcon />}
                containerElement={<Link to={`/meetings/${this.props.params.id}/edit`} />}
              />
            </List>
          </CardActions>
        </Card>
      </div>
    );
  }
}

MeetingShow.propTypes = {
  setText: PropTypes.func.isRequired,
  find: PropTypes.func.isRequired,
  directs: PropTypes.object.isRequired,
  meeting: PropTypes.object,
  params: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {
    meeting: state.meetings.activeMeeting,
    directs: state.directs.list,
    followUps: state.followUps.matchingList,
    loading: state.meetings.loading,
    error: state.meetings.error,
  };
};

export default connect(
  mapStateToProps,
  {
    find: meetingActions.find,
    followUpsEqualTo: followUpActions.equalTo,
    setText: headerActions.setText,
  },
)(MeetingShow);
