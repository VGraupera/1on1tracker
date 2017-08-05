import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import PropTypes from 'prop-types';

import QuestionSingle from './QuestionSingle';
import QuestionsList from './QuestionsList';
import QuestionsSettings from './QuestionsSettings';

const propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
  })).isRequired,
};

/**
 * @class MeetingQuestions
 * @extends React.Component
 * @description Render component
 */
class MeetingQuestions extends Component {
  state = {
    showAllQuestions: false,
  };

  handleToggleList = () => {
    this.setState(prevState => ({
      showAllQuestions: !prevState.showAllQuestions,
    }));
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { showAllQuestions } = this.state;
    const { questions } = this.props;
    const isEmpty = questions.length === 0;

    return (
      <div>
        {!isEmpty && <Toggle
          label="Show all suggested questions"
          labelPosition="right"
          toggled={showAllQuestions}
          onToggle={this.handleToggleList}
        />}
        {!isEmpty && !showAllQuestions && <QuestionSingle {...{ questions }} />}
        {!isEmpty && showAllQuestions && <QuestionsList {...{ questions }} />}
        {(isEmpty || showAllQuestions) && <QuestionsSettings />}
      </div>
    );
  }
}

MeetingQuestions.propTypes = propTypes;

export default MeetingQuestions;
