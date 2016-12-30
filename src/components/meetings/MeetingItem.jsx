import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { ListItem } from 'material-ui/List';

class MeetingItem extends Component {

  directByKey(key) {
    const index = this.props.directsKeys.findIndex(k => k === key);
    return this.props.directs[index];
  }

  meetingSummary(meeting) {
    const dateString = new Date(meeting.meetingDate).toLocaleDateString();
    const notesString = meeting.directsNotes ? meeting.directsNotes : meeting.managersNotes;
    return `${dateString} : ${notesString || ''}`;
  }

  render() {
    const { meeting, id } = this.props;
    const direct = this.directByKey(meeting.directKey);

    return (<ListItem
      primaryText={direct.name}
      secondaryText={this.meetingSummary(meeting)}
      containerElement={<Link to={`/meetings/${id}`} />}
    />
    );
  }}

MeetingItem.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    directs: state.directs.list,
    directsKeys: state.directs.keys,
  };
};

export default connect(mapStateToProps)(MeetingItem);
