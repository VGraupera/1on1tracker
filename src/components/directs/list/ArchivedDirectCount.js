import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';

import { getArchivedArrayCount } from '../../../selectors/archivedDirects';

/**
 * @function ArchivedDirectCount
 * @param {Number} count
 * @returns {XML}
 * @constructor
 */
function ArchivedDirectCount({ count }) {
  return (
    <List>
      <ListItem
        primaryText={`Archived ${count}`}
        containerElement={<Link to="/directs/archived" />}
      />
    </List>
  );
}

const mapStateToProps = (state) => ({
  count: getArchivedArrayCount(state),
});

export default connect(mapStateToProps)(ArchivedDirectCount);


