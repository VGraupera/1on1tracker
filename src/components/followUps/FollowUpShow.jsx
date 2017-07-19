import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

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

class FollowUpShow extends Component {
  componentDidMount() {
    this.props.find(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.followUp) !== JSON.stringify(nextProps.followUp) &&
      nextProps.followUp.meetingKey) {
      this.props.findMeeting(nextProps.followUp.meetingKey);
    }
  }

  handleNavigateToDirect = () => {
    browserHistory.push(`/directs/${this.props.followUp.directKey}`);
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

  handleCheck = (event, isInputChecked) => {
    const { followUp } = this.props;
    followUp.completed = !followUp.completed;
    this.props.update(this.props.params.id, followUp);
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
                    onCheck={this.handleCheck}
                  />
                }
                primaryText="Completed"
              />
            </List>
          </CardActions>
          <CardTitle
            title={direct ? direct.name : '???'}
            subtitle={new Date(followUp.followUpDate).toLocaleDateString()}
            onClick={this.handleNavigateToDirect}
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
  find: PropTypes.func.isRequired,
  findMeeting: PropTypes.func.isRequired,
  directs: PropTypes.object.isRequired,
  followUp: PropTypes.object,
  params: PropTypes.shape({
    id: PropTypes.string,
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
      dispatch(followUpActions.find(id));
    },
    findMeeting: (id) => {
      dispatch(meetingActions.find(id));
    },
    update: (key, value) => {
      dispatch(followUpActions.update(key, value));
    },
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FollowUpShow);
