import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';

import QuestionItem from './QuestionItem';
import QuestionsTools from './QuestionsTools';
import { getFiltreredQuestionsArray } from '../../../../selectors/questions';

/**
 * @description PropTypes for QuestionsList
 * @type {Object}
 */
const propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
  })).isRequired,
  clickOnItem: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

/**
 * @function QuestionsList
 * @param {Array} list array of questions
 * @param {Function} clickOnItem
 * @param {Function} onDelete
 * @param {Boolean} loading
 * @returns {XML}
 */
function QuestionsList({ list, clickOnItem, onDelete, loading }) {
  const isEmptyList = list.length === 0;
  const emptyListPrimaryText = loading ? 'Please wait' : 'No items. Add or/and Import Questions';
  return (
    <div>
      <QuestionsTools />
      <List>
        { isEmptyList && <ListItem key="no_item" disabled primaryText={emptyListPrimaryText} /> }
        { !isEmptyList && list.map(item => (
          <QuestionItem
            key={item.id}
            question={item}
            clickOnItem={clickOnItem}
            onDelete={onDelete}
          />
        ))}

      </List></div>
  );
}

QuestionsList.propTypes = propTypes;

const mapStateToProps = state => ({
  list: getFiltreredQuestionsArray(state),
  loading: state.questions.loading,
});

export default connect(mapStateToProps)(QuestionsList);

