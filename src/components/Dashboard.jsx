import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import MeetingIcon from 'material-ui/svg-icons/action/speaker-notes';
import FollowUpIcon from 'material-ui/svg-icons/action/assignment';
import DirectIcon from 'material-ui/svg-icons/social/person-add';

import * as headerActions from '../actions/header';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.setText('1on1 Tracker');
  }

  render() {
    const meetingButtonStyle = {
      margin: 0,
      top: 76,
      right: 20,
      bottom: 'auto',
      left: 'auto',
      position: 'fixed',
    };
    const followupButtonStyle = {
      margin: 0,
      top: 150,
      right: 20,
      bottom: 'auto',
      left: 'auto',
      position: 'fixed',
    };
    const directButtonStyle = {
      margin: 0,
      top: 225,
      right: 20,
      bottom: 'auto',
      left: 'auto',
      position: 'fixed',
    };

    return (
      <div className="container dashboard">
        <p>
          This is the dashboard.
        </p>
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

Dashboard.propTypes = {
  setText: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setText: headerActions.setText,
};

export default connect(null, mapDispatchToProps)(Dashboard);
