import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
} from 'material-ui/List';
import FollowUpItem from '../../../followUps/FollowUpItem';

class FollowUpList extends Component {
  componentDidMount() {
    this.selectFollowUps();
  }

  selectFollowUps() {
    this.props.followUpsEqualTo('directKey', this.props.directId);
  }

  renderItems() {
    const rows = [];
    if (this.props.followUps && this.props.followUps.size > 0) {
      this.props.followUps.forEach((item, key) => {
        rows.push(
          <FollowUpItem
            key={key}
            followUp={item}
            id={key}
            primaryText={new Date(item.followUpDate).toLocaleDateString()}
            secondaryText={`${item.description || 'TBD'}`}
          />);
      });
    } else {
      rows.push(
        <ListItem
          key="no_items"
          primaryText="No items"
        />);
    }
    return rows;
  }

  render() {
    return (
      <div className="wrapper">
        <List>
          {this.renderItems()}
        </List>
      </div>
    );
  }
}


FollowUpList.propTypes = {
  directId: PropTypes.string.isRequired,
  followUps: PropTypes.object,
};

export default FollowUpList;