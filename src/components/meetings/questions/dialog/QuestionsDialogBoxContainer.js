import { connect } from 'react-redux';

import questionAction from '../../../../actions/questions';
import QuestionsCrudDialogBox from './QuestionsCrudDialogBox';
import { getQuestionsArray } from '../../../../selectors/questions';

const mapStateToProps = state => ({
  questions: getQuestionsArray(state),
});

const mapDispatchToProps = dispatch => ({
  submitQuestionForm: (data) => {
    if (data.id) {
      dispatch(questionAction.update(data.id, { question: data.question }));
    } else {
      dispatch(questionAction.create(data));
    }
  },
  onDeleteQuestion: (id) => {
    dispatch(questionAction.remove(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsCrudDialogBox);
