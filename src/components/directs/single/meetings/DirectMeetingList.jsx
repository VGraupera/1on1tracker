import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';

import { getIsArchived } from '../../../../selectors/routing';
import InnerHtml from '../../../common/InnerHtml';


class DirectMeetingList extends Component {

  constructor() {
    super();
    this.state = { selectedMeetings: null };
  }

  componentDidMount() {
    this.onMount();
  }

  onMount() {
    const selectedMeetings = new Map([...this.props.meetings]
                              .filter(([key, value]) =>
                                value.directKey === this.props.directId));
    this.setState({ selectedMeetings });
  }

  renderMeetings() {
    const rows = [];
    if (this.props.meetings &&
      this.state.selectedMeetings &&
      this.state.selectedMeetings.size > 0) {
      this.state.selectedMeetings.forEach((meeting, key) => {
        rows.push(
          <ListItem
            key={key}
            primaryText={new Date(meeting.meetingDate).toLocaleDateString()}
            secondaryText={
              <InnerHtml html={
                (meeting.directsNotes ? meeting.directsNotes : meeting.managersNotes)
              }
              />
            }
            containerElement={<Link to={`/meetings/${key}`} />}
            disabled={this.props.isArchived}
          />);
      });
    } else {
      rows.push(
        <ListItem
          key="no_meetings"
          primaryText="No meetings"
        />);
    }
    return rows;
  }

  render() {
    return (
      <div className="wrapper">
        <List>
          {this.renderMeetings()}
        </List>
      </div>
    );
  }
}

DirectMeetingList.propTypes = {
  directId: PropTypes.string.isRequired,
  meetings: PropTypes.object.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  let meetings = 'meetings';
  const isArchived = getIsArchived(state);
  if (isArchived) {
    meetings = 'archivedMeetings';
  }
  return {
    meetings: state[meetings].list,
    isArchived,
  };
};

export default connect(mapStateToProps)(DirectMeetingList);
