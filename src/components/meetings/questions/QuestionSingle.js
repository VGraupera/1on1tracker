import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import QuestionAnswer from 'material-ui/svg-icons/action/question-answer';
import PropTypes from 'prop-types';

import uniqueRandomNumber from '../../../utility/uniqueRandomNumber';

/**
 * @description PropTypes for QuestionSingle
 * @type {{questions}}
 */
const propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
  })).isRequired,
};

/**
 * @class QuestionSingle
 * @extends React.Component
 * @description Render component
 */
class QuestionSingle extends Component {

  constructor(props) {
    super(props);
    this.uniqueRandom = uniqueRandomNumber(0, (this.props.questions.length - 1));
    this.state = {
      currentItemIndex: this.uniqueRandom(),
    };
  }


  handleClickOnItem = () => {
    this.setState({
      currentItemIndex: this.uniqueRandom(),
    });
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { currentItemIndex } = this.state;
    const { questions } = this.props;
    return (
      <List>
        <ListItem
          key={questions[currentItemIndex].id}
          primaryText={questions[currentItemIndex].question}
          onTouchTap={this.handleClickOnItem}
          leftIcon={<QuestionAnswer />}
        />
      </List>
    );
  }
}

QuestionSingle.propTypes = propTypes;

export default QuestionSingle;
