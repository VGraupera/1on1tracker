import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';

import QuetionsList from './QuetionsList';
import QuestionForm from './QuestionForm';
import AddQuestionBtn from './AddQuestionBtn';

/**
 * @description propTypes for QuestionsDialogBox
 * @type {Object}
 */
const propTypes = {
  handleCloseDialog: PropTypes.func.isRequired,
  submitQuestionForm: PropTypes.func.isRequired,
  onDeleteQuestion: PropTypes.func.isRequired,
  openDialog: PropTypes.bool.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
  })).isRequired,
};

/**
 * @class QuestionsDialogBox
 * @extends React.Component
 * @description Render component
 */
class QuestionsDialogBox extends Component {
  state = {
    showForm: false,
    clickedQuestion: null,
  };

  /**
   * @description Handle click on Add Question btn
   */
  handleAddQuestion = () => {
    this.setState({ showForm: true });
  };

  /**
   * @description handle on close dialog box
   */
  handleClose = () => {
    this.hideForm();
    this.props.handleCloseDialog();
  };

  /**
   * @description set state on close form
   */
  hideForm = () => {
    this.setState({ showForm: false, clickedQuestion: null });
  };

  /**
   * @description handle on submit question form
   * @param data
   */
  handleFormSubmit = (data) => {
    this.props.submitQuestionForm(data);
    this.hideForm();
  };

  /**
   * @description handle form cancel
   */
  handleFormCancel = () => {
    this.hideForm();
  };

  /**
   * @description handle Question Item on click
   * @param {Object} data question data
   */
  handleClickOnItem = (data) => {
    this.setState({
      showForm: true,
      clickedQuestion: data,
    });
  };

  /**
   * @description handle click on delete icon
   * @param {String} id
   */
  handleOnDeleteItem = (id) => {
    this.props.onDeleteQuestion(id);
  };


  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { showForm, clickedQuestion } = this.state;
    const { openDialog, questions } = this.props;

    let content = (
      <QuetionsList
        clickOnItem={this.handleClickOnItem}
        onDelete={this.handleOnDeleteItem}
        questions={questions}
      />
    );
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
          initialValues={clickedQuestion}
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

QuestionsDialogBox.propTypes = propTypes;

export default QuestionsDialogBox;
