import React from 'react';
import PropTypes from 'prop-types';

import CrudDialogBox from '../../../common/crud-dialog-box/CrudDialogBox';
import QuetionsList from './QuetionsList';
import QuestionForm from './QuestionForm';

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
 * @function QuestionsCrudDialogBox
 * @param props
 * @returns {XML}
 */
function QuestionsCrudDialogBox(props) {
  const {
    openDialog,
    handleCloseDialog,
    questions,
    onDeleteQuestion,
    submitQuestionForm,
  } = props;
  return (<CrudDialogBox
    title="Question"
    openDialog={openDialog}
    handleCloseDialog={handleCloseDialog}
    list={questions}
    ListComponent={QuetionsList}
    onDeleteItem={onDeleteQuestion}
    FormComponent={QuestionForm}
    submitForm={submitQuestionForm}

  />);
}

QuestionsCrudDialogBox.propTypes = propTypes;

export default QuestionsCrudDialogBox;
