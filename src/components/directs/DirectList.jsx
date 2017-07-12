import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';
import * as headerActions from '../../actions/header';
import { setSortBy } from '../../actions/directs';
import { getDirectsArrayWithTeam } from '../../selectors/direct';

import DirectItem from './DirectItem';
import DirectSort from './DirectSort';

class DirectList extends Component {

  componentDidMount() {
    this.props.setText('Directs');
  }

  renderDirects() {
    const { directs } = this.props;
    const noItems = <ListItem primaryText="No direct reports" />;
    const sortIcon = (
      <DirectSort
        handleChange={this.props.handleSetSortBy}
        selected={this.props.sortBy}
      />
    );
    const directList = directs.map(direct => (
      <DirectItem
        key={direct.id}
        direct={direct}
        id={direct.id}
      />
    ));
    const list = (
      <div>
        {sortIcon}
        {directList}
      </div>
    );
    return directList.length ? list : noItems;
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

    const directList = this.renderDirects();

    return (
      <div className="container directs">
        <List>

          {directList}
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
  sortBy: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  directs: PropTypes.array.isRequired,
  handleSetSortBy: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setText: (text) => {
    dispatch(headerActions.setText(text));
  },
  handleSetSortBy: (value) => {
    dispatch(setSortBy(value));
  },
});
const mapStateToProps = (state) => {
  return {
    directs: getDirectsArrayWithTeam(state),
    sortBy: state.directs.sortBy,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DirectList);
