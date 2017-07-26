import React from 'react';
import { List, ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';

import DirectItemDividerList from './DirectItemDividerList';
import DirectItemList from './DirectItemList';
import { SORT_BY_NAME } from '../../../constants/general';


const propTypes = {
  directs: PropTypes.any.isRequired,
  sortBy: PropTypes.string.isRequired,
};
/**
 * @function DirectList
 * @param props
 * @returns {XML}
 * @constructor
 */
function DirectList(props) {
  const { directs, sortBy } = props;
  if (directs.length === 0) {
    return (
      <List>
        <ListItem primaryText="No direct reports" />
      </List>
    );
  }

  if (sortBy === SORT_BY_NAME) {
    return <DirectItemList directs={directs} />;
  }
  return <DirectItemDividerList directs={directs} />;
}

DirectList.propTypes = propTypes;

export default DirectList;
