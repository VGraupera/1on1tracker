import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';

import { getTeamsArrayWithDeleteFlag } from '../../../selectors/teams';
import TeamItem from './TeamItem';


/**
 * @description propTypes for TeamList
 * @type {Object}
 */
const propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
  clickOnItem: PropTypes.func.isRequired,
};

/**
 * @function TeamList
 * @param {Array} list
 * @param {Function} clickOnItem
 * @param {Function} onDelete
 * @returns {XML}
 */
function TeamList({ list, clickOnItem, onDelete }) {
  const isEmptyList = list.length === 0;
  return (
    <List>
      {isEmptyList && <ListItem key="no_item" primaryText="No items" /> }
      {!isEmptyList && list.map(team => (
        <TeamItem key={team.id} team={team} clickOnItem={clickOnItem} onDelete={onDelete} />
        ))}

    </List>
  );
}

TeamList.propTypes = propTypes;
const mapStateToProps = state => ({
  list: getTeamsArrayWithDeleteFlag(state),
});
export default connect(mapStateToProps)(TeamList);

