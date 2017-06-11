import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {
  List,
  ListItem,
} from 'material-ui/List';

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
            secondaryText={(meeting.directsNotes ? meeting.directsNotes : meeting.managersNotes)}
            containerElement={<Link to={`/meetings/${key}`} />}
          />);
      });
    } else {
      rows.push(
        <ListItem
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
};

const mapStateToProps = (state) => {
  return {
    meetings: state.meetings.list,
  };
};

export default connect(mapStateToProps)(DirectMeetingList);
