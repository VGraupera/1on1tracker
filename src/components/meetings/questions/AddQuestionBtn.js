import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

/**
 * @function AddQuestionBtn
 * @param props
 * @returns {XML}
 */
function AddQuestionBtn({handleAddQuestion}) {
  return (
    <FloatingActionButton onTouchTap={handleAddQuestion} >
      <ContentAdd />
    </FloatingActionButton>
  );
}

export default AddQuestionBtn;
