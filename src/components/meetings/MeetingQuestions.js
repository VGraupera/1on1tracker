import React, { Component } from 'react';

import QuestionsDialogBoxContainer from './questions/QuestionsDialogBoxContainer';

/**
 * @class MeetingQuestions
 * @extends React.Component
 * @description Render component
 */
class MeetingQuestions extends Component {

  state = {
    openDialog: false,
  };

  openDialog = (e) => {
    e.preventDefault;
    this.setState({ openDialog: true });
  };

  handleCloseDialog = () => {
    this.setState({ openDialog: false });
  }

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    return (
      <div>
        <a href="#" onClick={this.openDialog}>Click here to set questions…</a>
        <QuestionsDialogBoxContainer
          openDialog={this.state.openDialog}
          handleCloseDialog={this.handleCloseDialog}
        />
      </div>
    );
  }
}

export default MeetingQuestions;
