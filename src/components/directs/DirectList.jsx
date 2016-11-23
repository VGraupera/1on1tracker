import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import DirectItem from './DirectItem';

class DirectList extends Component {

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
    const style = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    };

    return (
      <div className="container">
        <h1>Direct Reports</h1>
        <List>
          {this.renderDirects()}
        </List>
        <FloatingActionButton
          style={style}
          containerElement={<Link to="/directs/new" />}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
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

export default connect(mapStateToProps)(DirectList);
