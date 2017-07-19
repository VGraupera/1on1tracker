import React from 'react';
import { List } from 'material-ui/List';
import PropTypes from 'prop-types';

import DirectItem from './DirectItem';

const propTypes = {
  directs: PropTypes.array.isRequired,
};

/**
 * @function DirectItemList
 * @param {Array} directs array of direct object
 * @returns {Array} array of XML
 * @constructor
 */
function DirectItemList({ directs }) {
  const content = directs.map(direct => (
    <DirectItem
      key={direct.id}
      direct={direct}
      id={direct.id}
    />
  ));

  return (<List>{content}</List>);
}

DirectItemList.propTypes = propTypes;

export default DirectItemList;
