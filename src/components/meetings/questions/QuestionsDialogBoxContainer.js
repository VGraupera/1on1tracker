import { connect } from 'react-redux';

import questionAction from '../../../actions/questions';
import QuestionsDialogBox from './QuestionsDialogBox';
import { getQuestionsArray } from '../../../selectors/questions';

const mapStateToProps = state => ({
  questions: getQuestionsArray(state),
});

const mapDispatchToProps = dispatch => ({
  submitQuestionForm: (data) => {
    dispatch(questionAction.create(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsDialogBox);
