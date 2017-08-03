import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { red500, red200 } from 'material-ui/styles/colors';

/**
 * @class QuetionsList
 * @extends React.Component
 * @description Render component
 */
class QuetionsList extends Component {

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { questions } = this.props;
    return (
      <List>
        {questions.length === 0 && <ListItem key="no_item" primaryText="No items" /> }
        { questions.length !== 0 && questions.map((singleQuestion) => {
          return (
            <ListItem
              key={singleQuestion.id}
              primaryText={singleQuestion.question}
              rightIconButton={
                <IconButton
                  touch={true}
                  onTouchTap={() => {}}
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

      </List>
    );
  }
}

export default QuetionsList;
