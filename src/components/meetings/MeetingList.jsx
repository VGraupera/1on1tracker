import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import MeetingItem from './MeetingItem';
import * as HeaderActions from '../../actions/header';

class MeetingList extends Component {
  componentDidMount() {
    this.props.setText('Meetings');
  }

  renderMeetings() {
    const rows = [];
    if (this.props.meetings) {
      this.props.meetings.forEach((meeting, key) => {
        rows.push (
          <MeetingItem
            key={key}
            meeting={meeting}
            id={key}
          />
        );
      });
    }
    return rows;
  }

  render() {
    const buttonStyle = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 76,
      left: 'auto',
      position: 'fixed',
    };

    return (
      <List style={{ paddingTop: 60, paddingBottom: 56 }}>
        {this.renderMeetings()}
        <FloatingActionButton
          style={buttonStyle}
          containerElement={<Link to="/meetings/new" />}
        >
          <ContentAdd />
        </FloatingActionButton>
      </List>
    );
  }
}

MeetingList.propTypes = {
  setText: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    meetings: state.meetings.list,
  };
};

export default connect(mapStateToProps, { setText: HeaderActions.setText })(MeetingList);
