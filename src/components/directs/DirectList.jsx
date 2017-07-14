import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';

import * as headerActions from '../../actions/header';
import { getDirectsArrayWithTeam } from '../../selectors/direct';
import DirectItem from './DirectItem';
import DirectItemDivider from './DirectItemDivider';
import { SORT_BY_NAME } from '../../constants/sort';

class DirectList extends Component {

  componentDidMount() {
    this.props.setText('Directs');
  }

  renderDirects() {
    const { directs, sortBy } = this.props;
    const noItems = <ListItem primaryText="No direct reports" />;
    let directList;
    if (sortBy === SORT_BY_NAME) {
      directList = directs.map(direct => (
        <DirectItem
          key={direct.id}
          direct={direct}
          id={direct.id}
        />
      ));
    } else {
      directList = Object.keys(directs).map((team) => {
        return (
          <DirectItemDivider key={team} team={team} directs={directs[team]} />
        );
      });
    }
    return directList.length ? directList : noItems;
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
  setText: PropTypes.func.isRequired,
  directs: PropTypes.any.isRequired,
  sortBy: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setText: (text) => {
    dispatch(headerActions.setText(text));
  },
});
const mapStateToProps = (state) => {
  return {
    directs: getDirectsArrayWithTeam(state),
    sortBy: state.directs.sortBy,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DirectList);
