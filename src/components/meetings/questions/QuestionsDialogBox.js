import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';


import QuetionsList from './QuetionsList';
import QuestionForm from './QuestionForm';
import AddQuestionBtn from './AddQuestionBtn';

/**
 * @class QuestionsDialogBox
 * @extends React.Component
 * @description Render component
 */
class QuestionsDialogBox extends Component {
  state = {
    showForm: false,
  };

  handleAddQuestion = () => {
    this.setState({ showForm: true });
  };

  handleClose = () => {
    this.hideForm();
    this.props.handleCloseDialog();
  };

  hideForm = () => {
    this.setState({ showForm: false });
  };

  handleFormSubmit = (data) => {
    this.props.submitQuestionForm(data);
    this.hideForm();
  };

  handleFormCancel = () => {
    this.hideForm();
  };


  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { showForm } = this.state;
    const { openDialog, questions } = this.props;
    let content = <QuetionsList questions={questions} />;
    let dialogProps = {
      title: 'Suggested Questions',
      actions: <AddQuestionBtn handleAddQuestion={this.handleAddQuestion} />,
      actionsContainerStyle: { padding: 20, textAlign: 'center' },
    };
    if (showForm) {
      content = (
        <QuestionForm
          handleFormSubmit={this.handleFormSubmit}
          handleFormCancel={this.handleFormCancel}
        />
      );
      dialogProps = {
        title: 'Add Questions',
        actions: null,
        actionsContainerStyle: {},
      };
    }
    return (
      <Dialog
        modal={false}
        open={openDialog}
        onRequestClose={this.handleClose}
        autoScrollBodyContent={true}
        {...dialogProps}
      >
        {content}
      </Dialog>
    );
  }
}

export default QuestionsDialogBox;
