import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import MeetingItem from './MeetingItem';

class MeetingList extends Component {

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
    }
    if (rows.length === 0) {
      rows.push(
        <ListItem
          key="no_meetings"
          primaryText="No meetings"
        />,
      );
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
      zIndex: 1,
    };

    return (
      <div className="container meetings">
        <List>
          {this.renderMeetings()}
          <FloatingActionButton
            style={buttonStyle}
            containerElement={<Link to="/meetings/new" />}
          >
            <ContentAdd />
          </FloatingActionButton>
        </List>
      </div>
    );
  }
}

MeetingList.propTypes = {
  meetings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    meetings: state.meetings.list,
  };
};

export default connect(mapStateToProps)(MeetingList);
