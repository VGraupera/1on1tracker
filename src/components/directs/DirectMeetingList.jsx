import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class DirectMeetingList extends Component {

  constructor() {
    super();
    this.state = { selectedMeetingKeys: [] };
  }

  componentDidMount() {
    this.onMount();
  }

  onMount() {
    const allMeetingKeys = Object.keys(this.props.meetings);
    this.setState({ selectedMeetingKeys: allMeetingKeys.filter(meetingKey =>
      this.props.meetings[meetingKey].directKey === this.props.directId)
    });
  }

  renderMeetings() {
    let rows = [];
    if (this.props.meetings) {
      rows = this.state.selectedMeetingKeys.map((qid) => {
        const meeting = this.props.meetings[qid];
        return (
          <ListItem
            key={qid}
            primaryText={new Date(meeting.meetingDate).toLocaleDateString()}
            secondaryText={(meeting.directsNotes ? meeting.directsNotes : meeting.managersNotes)}
            containerElement={<Link to={`/meetings/${qid}`} />}
          />
        );
      });
    }
    return rows;
  }

  render() {
    const style = {
      margin: 0,
    };

    return (
      <div className="wrapper">
        <h1>Meetings</h1>
        <FloatingActionButton
          style={style}
          containerElement={<Link to={`/directs/${this.props.directId}/meetings/new`} />}
        >
          <ContentAdd />
        </FloatingActionButton>
        <List>
          {this.renderMeetings()}
        </List>
      </div>
    );
  }
}

DirectMeetingList.contextTypes = {
  router: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    meetings: state.meetings.list,
  };
};

export default connect(mapStateToProps)(DirectMeetingList);
