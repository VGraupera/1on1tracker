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
    const rows = [];
    if (this.props.directs) {
      this.props.directs.forEach((direct, key) => {
        rows.push(<DirectItem key={key} direct={direct} id={key} />);
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
      <div className="container directs">
        <List>
          {this.renderDirects()}
          <FloatingActionButton
            style={buttonStyle}
            containerElement={<Link to="/directs/new" />}
          >
            <ContentAdd />
          </FloatingActionButton>
        </List>
      </div>
    );
  }
}

DirectList.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    directs: state.directs.list,
  };
};

export default connect(mapStateToProps, { setText: headerActions.setText })(DirectList);
