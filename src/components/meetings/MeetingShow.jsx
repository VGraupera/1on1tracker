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
import { CSSTransitionGroup } from 'react-transition-group';
import FollowUpItem from '../followUps/FollowUpItem';

import meetingActions from '../../actions/meetings';
import followUpActions from '../../actions/followUps';

import { getMeetingsInSameDirectAsActive } from '../../selectors/meetings';


class MeetingShow extends Component {

  /**
   * @description
   * @type {{cssTransitionName: string}}
   */
  state= {
    cssTransitionName: 'no-transition',
  };

  componentDidMount() {
    this.props.find(this.props.params.id);
    this.selectFollowUps();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      const { meetingsArray } = this.props;
      const currentIndex = meetingsArray.findIndex(meeting => meeting.id === this.props.params.id);
      const nextIndex = meetingsArray.findIndex(meeting => meeting.id === nextProps.params.id);
      if (currentIndex < nextIndex) {
        this.setState({ cssTransitionName: 'meetingSlideRightToLeft' });
      } else {
        this.setState({ cssTransitionName: 'meetingSlideLeftToRight' });
      }
      this.props.find(nextProps.params.id);
      this.props.followUpsEqualTo('meetingKey', nextProps.params.id);
    }
  }

  selectFollowUps() {
    this.props.followUpsEqualTo('meetingKey', this.props.params.id);
  }

  renderFollowUps() {
    const rows = [];
    if (this.props.followUps) {
      rows.push(
        <Subheader key="followups_header" >Followups from this Meeting</Subheader>,
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
      <CSSTransitionGroup
        transitionName={this.state.cssTransitionName}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        <div key={this.props.params.id} className="container">
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
      </CSSTransitionGroup>
    );
  }
}

MeetingShow.propTypes = {
  find: PropTypes.func.isRequired,
  directs: PropTypes.object.isRequired,
  meeting: PropTypes.object,
  meetingsArray: PropTypes.array.isRequired,
  followUpsEqualTo: PropTypes.func.isRequired,
  followUps: PropTypes.any.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  params: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    meeting: state.meetings.activeMeeting,
    meetingsArray: getMeetingsInSameDirectAsActive(state, ownProps.params),
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
  },
)(MeetingShow);
