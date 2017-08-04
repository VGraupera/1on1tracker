import React, { Component } from 'react';

import QuestionsDialogBoxContainer from './dialog/QuestionsDialogBoxContainer';

/**
 * @class QuestionsSettings
 * @extends React.Component
 * @description Render component
 */
class QuestionsSettings extends Component {

  state = {
    openDialog: false,
  };

  openDialog = (e) => {
    e.preventDefault();
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
      <div style={{ padding: '1%' }}>
        <a href="" onClick={this.openDialog} role="button" >Click here to set questions…</a>
        <QuestionsDialogBoxContainer
          openDialog={this.state.openDialog}
          handleCloseDialog={this.handleCloseDialog}
        />
      </div>
    );
  }
}

export default QuestionsSettings;
