import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import FollowUpItem from './FollowUpItem';
import * as HeaderActions from '../../actions/header';

class FollowUpList extends Component {
  componentDidMount() {
    this.props.setText('Follow Ups');
  }

  renderFollowUps() {
    const rows = [];
    if (this.props.followUps) {
      this.props.followUps.forEach((followUp, key) => {
        rows.push(
          <FollowUpItem
            key={key}
            followUp={followUp}
            id={key}
          />
        );
      });
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
      <List style={{ paddingTop: 60, paddingBottom: 56 }}>
        {this.renderFollowUps()}
        <FloatingActionButton
          style={buttonStyle}
          containerElement={<Link to="/followUps/new" />}
        >
          <ContentAdd />
        </FloatingActionButton>
      </List>
    );
  }
}

FollowUpList.propTypes = {
  setText: React.PropTypes.func.isRequired,
  followUps: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    followUps: state.followUps.list,
  };
};

export default connect(mapStateToProps, { setText: HeaderActions.setText })(FollowUpList);
