import React from 'react';
import { List } from 'material-ui/List';
import PropTypes from 'prop-types';

import DirectItemDivider from './item/DirectItemDivider';

const propTypes = {
  directs: PropTypes.object.isRequired,
};

/**
 * @function DirectItemDividerList
 * @param {Object} directs Object with team name as properties
 * @returns {XML}
 * @constructor
 */
function DirectItemDividerList({ directs }) {
  const content = Object.keys(directs).map((team) => {
    return (
      <DirectItemDivider key={team} team={team} directs={directs[team]} />
    );
  });
  return (<List>{content}</List>);
}

DirectItemDividerList.propTypes = propTypes;

export default DirectItemDividerList;
