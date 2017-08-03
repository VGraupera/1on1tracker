import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';

const propTypes = {
  handleAddQuestion: PropTypes.func.isRequired,
};

/**
 * @function AddQuestionBtn
 * @param {Function} handleAddQuestion
 * @returns {XML}
 */
function AddQuestionBtn({ handleAddQuestion }) {
  return (
    <FloatingActionButton onTouchTap={handleAddQuestion} >
      <ContentAdd />
    </FloatingActionButton>
  );
}

AddQuestionBtn.propTypes = propTypes;

export default AddQuestionBtn;
