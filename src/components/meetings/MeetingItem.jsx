import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { ListItem } from 'material-ui/List';

class MeetingItem extends Component {
  static summary(meeting) {
    const dateString = new Date(meeting.meetingDate).toLocaleDateString();
    const notesString = meeting.directsNotes ? meeting.directsNotes : meeting.managersNotes;
    return `${dateString} : ${notesString || ''}`;
  }

  render() {
    const { directs, meeting, id } = this.props;

    if (directs && meeting) {
      const direct = directs.get(meeting.directKey);

      return (<ListItem
        primaryText={direct.name}
        secondaryText={MeetingItem.summary(meeting)}
        containerElement={<Link to={`/meetings/${id}`} />}
      />
      );
    }

    return null;
  }
}

MeetingItem.propTypes = {
  directs: React.PropTypes.object.isRequired,
  meeting: React.PropTypes.object.isRequired,
  id: React.PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    directs: state.directs.list,
  };
};

export default connect(mapStateToProps)(MeetingItem);
