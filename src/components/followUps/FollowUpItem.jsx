import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { browserHistory } from 'react-router';

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

  render() {
    const { directs, followUp } = this.props;

    if (directs && followUp) {
      const direct = directs.get(followUp.directKey);

      return (<ListItem
        leftCheckbox={
          <Checkbox
            checked={followUp.completed}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        }
        primaryText={this.props.primaryText || direct.name}
        secondaryText={this.props.secondaryText || FollowUpItem.summary(followUp)}
        onClick={this.onClick}
      />
      );
    }

    return null;
  }
}

FollowUpItem.contextTypes = {
  router: React.PropTypes.object,
};

FollowUpItem.propTypes = {
  directs: React.PropTypes.object.isRequired,
  followUp: React.PropTypes.object.isRequired,
  id: React.PropTypes.string.isRequired,
  primaryText: React.PropTypes.string,
  secondaryText: React.PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    directs: state.directs.list,
  };
};

export default connect(mapStateToProps)(FollowUpItem);
