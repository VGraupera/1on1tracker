import React from 'react';
import IconButton from 'material-ui/IconButton';
import AutoRenew from 'material-ui/svg-icons/action/autorenew';
import PropTypes from 'prop-types';

const propTypes = {
  importQuestion: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

/**
 * @function QuestionsImportBtn
 * @param {Function} importQuestion
 * @param {Boolean} loading
 * @returns {XML}
 */
function QuestionsImportBtn({ importQuestion, loading }) {
  return (
    <div style={{ textAlign: 'right' }}>
      <IconButton onTouchTap={importQuestion} tooltipPosition="bottom-left" tooltip="Import suggested questions">
        <div className={loading ? 'import-question-loader' : ''}><AutoRenew /></div>
      </IconButton>
    </div>
  );
}

QuestionsImportBtn.propTypes = propTypes;

export default QuestionsImportBtn;

