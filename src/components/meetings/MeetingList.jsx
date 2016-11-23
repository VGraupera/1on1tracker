import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import MeetingItem from './MeetingItem';

class MeetingList extends Component {

  renderMeetings() {
    let rows = [];
    if (this.props.meetings) {
      rows = Object.keys(this.props.meetings).map((qid) => {
        const meeting = this.props.meetings[qid];
        return (<MeetingItem
          key={qid}
          meeting={meeting}
          id={qid} />
        );
      });
    }
    return rows;
  }

  render() {
    const style = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    };

    return (
      <div className="container">
        <h1>Meetings</h1>
        <List>
          {this.renderMeetings()}
        </List>
        <FloatingActionButton
          style={style}
          containerElement={<Link to="/meetings/new" />}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

MeetingList.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    meetings: state.meetings.list,
  };
};

export default connect(mapStateToProps, null)(MeetingList);
