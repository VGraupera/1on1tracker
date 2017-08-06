import React, {Component} from "react";
import MenuItem from "material-ui/MenuItem";
import QuestionsDialogBoxContainer from "../meetings/questions/dialog/QuestionsDialogBoxContainer";
/**
 * @class QuestionMenuItem
 * @extends React.Component
 * @description Render component
 */
class QuestionMenuItem extends Component {

  state = {
    openDialog: false,
  };
  handleItemClick = () => {
    this.props.closeDrawer(false);
    this.setState({ openDialog: true });
  };
  handleCloseDialog = () => {
    this.setState({ openDialog: false });
  };
  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    return (
      <div>
        <MenuItem
          primaryText="Suggested Questions"
          onTouchTap={this.handleItemClick}
        />
        <QuestionsDialogBoxContainer
          openDialog={this.state.openDialog}
          handleCloseDialog={this.handleCloseDialog}
        />
      </div>
    );
  }
}

export default QuestionMenuItem;
