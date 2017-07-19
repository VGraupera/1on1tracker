import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';

import { getArchivedArrayCount } from '../../../selectors/archivedDirects';
import OnArchivedHOC from '../../../HOCs/OnArchivedHOC';

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
        containerElement={<Link to={{pathname:'/directs/archived',state:{isArchived:true}}} />}
      />
    </List>
  );
}

const mapStateToProps = (state) => ({
  count: getArchivedArrayCount(state),
});

export default OnArchivedHOC()(connect(mapStateToProps)(ArchivedDirectCount));


