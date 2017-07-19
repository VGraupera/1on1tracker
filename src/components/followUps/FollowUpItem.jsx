import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { browserHistory } from 'react-router';

import followUpActions from '../../actions/followUps';
import {getDirectsArray} from '../../selectors/direct';

class FollowUpItem extends Component {
  static summary(followUp) {
    const dateString = new Date(followUp.followUpDate).toLocaleDateString();
    const notesString = followUp.description;
    return `${dateString} : ${notesString || 'TBD'}`;
  }

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    browserHistory.push(`/followUps/${this.props.id}`);
  }

  handleCheck = (event, isInputChecked) => {
    const { id, followUp } = this.props;
    followUp.completed = !followUp.completed;
    this.props.update(id, followUp);
  }

  render() {
    const { directs, followUp } = this.props;

    if (directs && followUp) {
      const direct = directs.find((direct)=>direct.id === followUp.directKey);

      return (<ListItem
        leftCheckbox={
          <Checkbox
            checked={followUp.completed}
            onClick={(event, isInputChecked) => {
              event.stopPropagation();
              this.handleCheck(event, isInputChecked);
            }}
          />
        }
        primaryText={this.props.primaryText || direct ? direct.name : '???'}
        secondaryText={this.props.secondaryText || FollowUpItem.summary(followUp)}
        onClick={this.onClick}
      />
      );
    }

    return null;
  }
}

FollowUpItem.contextTypes = {
  router: PropTypes.object,
};

FollowUpItem.propTypes = {
  directs: PropTypes.array.isRequired,
  followUp: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    directs: getDirectsArray(state),
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    update: (key, value) => {
      dispatch(followUpActions.update(key, value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowUpItem);
