import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import { getArchivedArrayCount } from '../../../selectors/archivedDirects';
import HideOnArchivedHOC from '../../../HOCs/archive/HideOnArchivedHOC';

/**
 * @description PropTypes for ArchivedDirectCount
 * @type {{count: (*)}}
 */
const propTypes = {
  count: PropTypes.number.isRequired,
};

/**
 * @function ArchivedDirectCount
 * @param {Number} count
 * @returns {XML}
 * @constructor
 */
function ArchivedDirectCount({ count }) {
  if (count === 0) {
    return null;
  }
  return (
    <List>
      <ListItem
        style={{ zIndex: 0 }}
        primaryText={`Archived : ( ${count} )`}
        containerElement={<Link to={{ pathname: '/directs/archived', state: { isArchived: true } }} />}
      />
    </List>
  );
}

ArchivedDirectCount.propTypes = propTypes;

const mapStateToProps = state => ({
  count: getArchivedArrayCount(state),
});

export default HideOnArchivedHOC(connect(mapStateToProps)(ArchivedDirectCount));

