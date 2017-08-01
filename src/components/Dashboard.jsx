import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Subheader from 'material-ui/Subheader';
import {
  List,
  ListItem,
} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MeetingIcon from 'material-ui/svg-icons/action/speaker-notes';
import FollowUpIcon from 'material-ui/svg-icons/action/assignment';
import DirectIcon from 'material-ui/svg-icons/social/person-add';

import MeetingItem from './meetings/MeetingItem';
import FollowUpItem from './followUps/FollowUpItem';
import ShowLoaderHOC from '../HOCs/ShowLoaderHOC';

export class Dashboard extends Component {

  renderMeetings() {
    const rows = [];
    if (this.props.meetings && this.props.meetings.size > 0) {
      this.props.meetings.forEach((meeting, key) => {
        rows.push(
          <MeetingItem
            key={key}
            meeting={meeting}
            id={key}
          />,
        );
      });
    } else {
      rows.push(
        <ListItem
          key="no_meetings"
          primaryText="No meetings"
        />,
      );
    }
    return rows.slice(0, 5);
  }

  renderFollowUps() {
    const rows = [];
    if (this.props.followUps && this.props.followUps.size > 0) {
      this.props.followUps.forEach((followUp, key) => {
        if (followUp.completed) {
          return;
        }
        rows.push(
          <FollowUpItem
            key={key}
            followUp={followUp}
            id={key}
          />,
        );
      });
    }
    if (rows.length === 0) {
      rows.push(
        <ListItem
          key="no_follows_up"
          primaryText="No items"
        />,
      );
    }
    return rows.slice(0, 5);
  }

  render() {
    const meetingButtonStyle = {
      margin: 0,
      top: 76,
      right: 20,
      bottom: 'auto',
      left: 'auto',
      position: 'fixed',
      zIndex: 1,
    };
    const followupButtonStyle = {
      margin: 0,
      top: 150,
      right: 20,
      bottom: 'auto',
      left: 'auto',
      position: 'fixed',
      zIndex: 1,
    };
    const directButtonStyle = {
      margin: 0,
      top: 225,
      right: 20,
      bottom: 'auto',
      left: 'auto',
      position: 'fixed',
      zIndex: 1,
    };

    return (
      <div className="container dashboard">
        <List>
          <Subheader>Recent Meetings</Subheader>
          {this.renderMeetings()}
        </List>
        <List>
          <Subheader>Pending Follow Ups</Subheader>
          {this.renderFollowUps()}
        </List>
        <FloatingActionButton
          style={meetingButtonStyle}
          containerElement={<Link to="/meetings/new" />}
        >
          <MeetingIcon />
        </FloatingActionButton>
        <FloatingActionButton
          style={followupButtonStyle}
          containerElement={<Link to="/followUps/new" />}
        >
          <FollowUpIcon />
        </FloatingActionButton>
        <FloatingActionButton
          style={directButtonStyle}
          containerElement={<Link to="/directs/new" />}
        >
          <DirectIcon />
        </FloatingActionButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    followUps: state.followUps.list,
    meetings: state.meetings.list,
    loadingData: (state.meetings.loading || state.followUps.loading),
  };
};

export default connect(mapStateToProps)(
  ShowLoaderHOC('loadingData', true)(Dashboard),
);
