import React from 'react';
import { List, ListItem } from 'material-ui/List';
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
 * @param props
 * @returns {XML}
 */
function QuestionsList({ questions }) {
  return (
    <List>
      {questions.map((singleQuestion) => {
        return (
          <ListItem disabled={true} key={singleQuestion.id} primaryText={singleQuestion.question} />
        );
      })}
    </List>
  );
}

QuestionsList.propTypes = propTypes;

export default QuestionsList;
