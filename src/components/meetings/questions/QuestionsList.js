import React from 'react';
import { List, ListItem } from 'material-ui/List';
import QuestionAnswer from 'material-ui/svg-icons/action/question-answer';
import PropTypes from 'prop-types';

/**
 * @description PropTypes for QuestionsList
 * @type {{questions}}
 */
const propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
  })).isRequired,
};

/**
 * @function QuestionsList
 * @param {Array} questions
 * @returns {XML}
 */
function QuestionsList({ questions }) {
  return (
    <List>
      {questions.map((singleQuestion) => {
        return (
          <ListItem
            key={singleQuestion.id}
            leftIcon={<QuestionAnswer />}
            primaryText={singleQuestion.question}
            disabled={true}
          />
        );
      })}
    </List>
  );
}

QuestionsList.propTypes = propTypes;

export default QuestionsList;
