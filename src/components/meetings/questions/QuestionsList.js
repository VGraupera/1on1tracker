import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
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
    <Paper style={{ maxHeight: 200, overflow: 'auto', margin: 5 }}>
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
    </Paper>
  );
}

QuestionsList.propTypes = propTypes;

export default QuestionsList;
