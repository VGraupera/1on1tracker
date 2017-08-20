import React from 'react';

import CategoriesQuestions from './CategoriesQuestions';
import QuestionsImportContainer from './QuestionsImportContainer';

/**
 * @function QuestionsTools
 * @returns {XML}
 */
function QuestionsTools() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '100%' }} ><CategoriesQuestions /></div>
      <div style={{ width: '100%', textAlign: 'right' }}><QuestionsImportContainer /></div>
    </div>
  );
}

export default QuestionsTools;
