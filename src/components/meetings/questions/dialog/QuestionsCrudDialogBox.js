import React from 'react';
import PropTypes from 'prop-types';

import CrudDialogBox from '../../../common/crud-dialog-box/CrudDialogBox';
import QuestionsList from './QuestionsList';
import QuestionForm from './QuestionForm';

const propTypes = {
  handleCloseDialog: PropTypes.func.isRequired,
  submitQuestionForm: PropTypes.func.isRequired,
  onDeleteQuestion: PropTypes.func.isRequired,
  openDialog: PropTypes.bool.isRequired,
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
    onDeleteQuestion,
    submitQuestionForm,
    ...rest
  } = props;

  const dialogProps = {
    title: 'Question',
    openDialog,
    handleCloseDialog,
    ListComponent: QuestionsList,
    onDeleteItem: onDeleteQuestion,
    FormComponent: QuestionForm,
    submitForm: submitQuestionForm,
    ...rest,
  };

  return (<CrudDialogBox {...dialogProps} />);
}

QuestionsCrudDialogBox.propTypes = propTypes;

export default QuestionsCrudDialogBox;
