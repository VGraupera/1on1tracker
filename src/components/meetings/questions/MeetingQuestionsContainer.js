import { connect } from 'react-redux';

import MeetingQuestions from './MeetingQuestions';
import { getQuestionsArray } from '../../../selectors/questions';

const mapStateToProps = state => ({
  questions: getQuestionsArray(state),
});

export default connect(mapStateToProps)(MeetingQuestions);
