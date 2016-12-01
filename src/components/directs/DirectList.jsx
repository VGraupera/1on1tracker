import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import * as headerActions from '../../actions/header';

import DirectItem from './DirectItem';

class DirectList extends Component {

  componentDidMount() {
    this.props.setText('Directs');
  }

  renderDirects() {
    let rows = [];
    if (this.props.directs) {
      rows = Object.keys(this.props.directs).map((index) => {
        const direct = this.props.directs[index];
        return <DirectItem key={index} direct={direct} id={this.props.directsKeys[index]} />;
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
        {this.renderDirects()}
        <FloatingActionButton
          style={buttonStyle}
          containerElement={<Link to="/directs/new" />}
        >
          <ContentAdd />
        </FloatingActionButton>
      </List>
    );
  }
}

DirectList.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    directs: state.directs.list,
    directsKeys: state.directs.keys,
  };
};

export default connect(mapStateToProps, { setText: headerActions.setText })(DirectList);
