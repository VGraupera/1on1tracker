import React from 'react';
import PropTypes from 'prop-types';

import FollowUpListContainer from './FollowUpListContainer';
import FollowUpListArchivedContainer from './FollowUpListArchivedContainer';

/**
 * @description propTypes for DirectFollowUpList
 * @type {Object}
 */
const propTypes = {
  directId: PropTypes.string.isRequired,
};

/**
 * @function DirectFollowUpList
 * @param props
 * @returns {XML}
 */
function DirectFollowUpList(props) {
  return (
    <div>
      <FollowUpListContainer directId={props.directId} />
      <FollowUpListArchivedContainer directId={props.directId} />
    </div>
  );
}

DirectFollowUpList.propTypes = propTypes;

export default DirectFollowUpList;
