import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { ListItem } from 'material-ui/List';

import { getDirectsArray } from '../../selectors/direct';
import InnerHtmlStripTags from '../common/InnerHtmlStripTags';

class MeetingItem extends Component {
  static summary(meeting) {
    const dateString = new Date(meeting.meetingDate).toLocaleDateString();
    const notesString = meeting.directsNotes ? meeting.directsNotes : meeting.managersNotes;
    return `${dateString} : ${notesString || ''}`;
  }

  render() {
    const { directs, meeting, id } = this.props;

    if (directs && meeting) {
      const direct = directs.find(singleDirect => singleDirect.id === meeting.directKey);

      return (<ListItem
        primaryText={direct ? direct.name : '???'}
        secondaryText={
          <InnerHtmlStripTags html={MeetingItem.summary(meeting)} />
        }
        containerElement={<Link to={`/meetings/${id}`} />}
      />
      );
    }

    return null;
  }
}

MeetingItem.propTypes = {
  directs: PropTypes.array.isRequired,
  meeting: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    directs: getDirectsArray(state),
  };
};

export default connect(mapStateToProps)(MeetingItem);
