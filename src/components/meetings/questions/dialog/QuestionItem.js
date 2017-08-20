import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { red500, red200 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

const propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
  }).isRequired,
  clickOnItem: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

/**
 * @class QuestionItem
 * @extends React.Component
 * @description Render component
 */
class QuestionItem extends Component {

  handleClickOnItem = () => {
    const { question, clickOnItem } = this.props;
    clickOnItem(question);
  };

  handleOnDelete = () => {
    const { question, onDelete } = this.props;
    onDelete(question.id);
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { id, question } = this.props.question;
    return (
      <ListItem
        key={id}
        primaryText={question}
        onTouchTap={this.handleClickOnItem}
        rightIconButton={
          <IconButton
            touch={true}
            onTouchTap={this.handleOnDelete}
          >
            <ActionDelete
              color={red500}
              hoverColor={red200}
            />
          </IconButton>
        }
      />
    );
  }
}

QuestionItem.propTypes = propTypes;

export default QuestionItem;
