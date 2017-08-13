import React from 'react';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { red500, red200 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

import QuestionsImportContainer from './QuestionsImportContainer';

/**
 * @description PropTypes for QuestionsList
 * @type {Object}
 */
const propTypes = {
  list: PropTypes.array.isRequired,
  clickOnItem: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

/**
 * @function QuetionsList
 * @param {Array} list array of questions
 * @param {Function} clickOnItem
 * @param {Function} onDelete
 * @returns {XML}
 */
function QuetionsList({ list, clickOnItem, onDelete }) {
  return (
    <div>
      <QuestionsImportContainer />
      <List>
        {list.length === 0 && <ListItem key="no_item" primaryText="No items. Add or/and Import Questions" /> }
        { list.length !== 0 && list.map((singleQuestion) => {
          return (
            <ListItem
              key={singleQuestion.id}
              primaryText={singleQuestion.question}
              onTouchTap={() => clickOnItem(singleQuestion)}
              rightIconButton={
                <IconButton
                  touch={true}
                  onTouchTap={() => onDelete(singleQuestion.id)}
                >
                  <ActionDelete
                    color={red500}
                    hoverColor={red200}
                  />
                </IconButton>
            }
            />
          );
        })}

      </List></div>
  );
}

QuetionsList.propTypes = propTypes;

export default QuetionsList;

