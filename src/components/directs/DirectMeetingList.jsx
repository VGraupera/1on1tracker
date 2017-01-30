import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
    if (this.props.meetings && this.state.selectedMeetings) {
      this.state.selectedMeetings.forEach((meeting, key) => {
        rows.push(
          <ListItem
            key={key}
            primaryText={new Date(meeting.meetingDate).toLocaleDateString()}
            secondaryText={(meeting.directsNotes ? meeting.directsNotes : meeting.managersNotes)}
            containerElement={<Link to={`/meetings/${key}`} />}
          />);
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
