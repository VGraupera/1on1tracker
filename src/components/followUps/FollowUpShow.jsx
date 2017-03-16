import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {
  Card,
  CardActions,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import {
  List,
  ListItem,
} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

import followUpActions from '../../actions/followUps';
import meetingActions from '../../actions/meetings';
import * as headerActions from '../../actions/header';

class FollowUpShow extends Component {
  componentDidMount() {
    this.props.find(this.props.params.id);
    this.props.setText('Follow Up');
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.followUp) !== JSON.stringify(nextProps.followUp) &&
      nextProps.followUp.meetingKey) {
      this.props.findMeeting(nextProps.followUp.meetingKey);
    }
  }

  renderLinkedMeeting() {
    const rows = [];
    const meeting = this.props.activeMeeting;
    if (meeting) {
        rows.push(
          <Subheader>Re: this Meeting</Subheader>
        );
        rows.push(
          <ListItem
            key={this.props.followUp.meetingKey}
            primaryText={new Date(meeting.meetingDate).toLocaleDateString()}
            secondaryText={(meeting.directsNotes ? meeting.directsNotes : meeting.managersNotes)}
            containerElement={<Link to={`/meetings/${this.props.followUp.meetingKey}`} />}
          />);
    }
    return rows;
  }

  render() {
    const { followUp, loading, error } = this.props;

    if (loading) {
      return <div className="container">Loading...</div>;
    } else if (error) {
      return <div className="container">{error.message}</div>;
    } else if (!followUp) {
      return <span>No FollowUp</span>;
    }

    const direct = this.props.directs.get(followUp.directKey);
    return (
      <div className="container">
        <Card>
          <CardActions>
            <List>
              <ListItem
                leftCheckbox={
                  <Checkbox
                    checked={followUp.completed}
                  />
                }
                primaryText="Completed"
              />
            </List>
          </CardActions>
          <CardTitle
            title={direct.name}
            subtitle={new Date(followUp.followUpDate).toLocaleDateString()}
          />
          <CardText>
            <h2>What needs to be done?</h2>
            {followUp.description ? (
              <pre>{followUp.description}</pre>
            ) : 'TBD' }
          </CardText>
          <CardActions>
            <List>
              {this.renderLinkedMeeting()}
              <ListItem
                primaryText="Edit"
                leftIcon={<EditIcon />}
                containerElement={<Link to={`/followUps/${this.props.params.id}/edit`} />}
              />
            </List>
          </CardActions>
        </Card>
      </div>
    );
  }
}

FollowUpShow.propTypes = {
  setText: React.PropTypes.func.isRequired,
  find: React.PropTypes.func.isRequired,
  findMeeting: React.PropTypes.func.isRequired,
  directs: React.PropTypes.object.isRequired,
  followUp: React.PropTypes.object,
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {
    followUp: state.followUps.activeFollowUp,
    activeMeeting: state.meetings.activeMeeting,
    directs: state.directs.list,
    loading: state.followUps.loading,
    error: state.followUps.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    find: (id) => {
      dispatch(followUpActions.find(id))
    },
    findMeeting: (id) => {
      dispatch(meetingActions.find(id))
    },
    setText: headerActions.setText,
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FollowUpShow);
