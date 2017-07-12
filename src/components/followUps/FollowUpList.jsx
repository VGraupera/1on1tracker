import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {
  List,
  ListItem,
} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import FollowUpItem from './FollowUpItem';
import * as HeaderActions from '../../actions/header';

class FollowUpList extends Component {
  constructor() {
    super();
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.state = {
      showCompleted: false,
    };
  }

  componentDidMount() {
    this.props.setText('Follow Ups');
  }

  toggleCompleted() {
    this.setState({ showCompleted: !this.state.showCompleted });
  }

  renderFollowUps() {
    const rows = [];
    rows.push(
      <ListItem
        key="show_completed"
        primaryText={this.state.showCompleted ? 'Hide Completed' : 'Show Completed'}
        onTouchTap={this.toggleCompleted}
        style={{ textAlign: 'center', color: 'green' }}
      />,
      <Divider key="show_completed_divider" />,
    );

    if (this.props.followUps && this.props.followUps.size > 0) {
      this.props.followUps.forEach((followUp, key) => {
        if (!this.state.showCompleted && followUp.completed) {
          return;
        }
        rows.push(
          <FollowUpItem
            key={key}
            followUp={followUp}
            id={key}
          />
        );
      });
    };

    if (rows.length === 2) {
      rows.push(
        <ListItem
          key="no_foolows_up"
          primaryText="No items"
        />
      );
    }
    return rows;
  }

  render() {
    const buttonStyle = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 76,
      left: 'auto',
      position: 'fixed',
    };

    return (
      <div className="container followUps">
        <List>
          {this.renderFollowUps()}
          <FloatingActionButton
            style={buttonStyle}
            containerElement={<Link to="/followUps/new" />}
          >
            <ContentAdd />
          </FloatingActionButton>
        </List>
      </div>
    );
  }
}

FollowUpList.propTypes = {
  setText: PropTypes.func.isRequired,
  followUps: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    followUps: state.followUps.list,
  };
};

export default connect(mapStateToProps, { setText: HeaderActions.setText })(FollowUpList);
