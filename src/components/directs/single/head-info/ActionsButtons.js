import React from 'react';
import { CardActions } from 'material-ui/Card';
import { Link } from 'react-router';
import MeetingIcon from 'material-ui/svg-icons/action/speaker-notes';
import FollowUpIcon from 'material-ui/svg-icons/action/assignment';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import PropTypes from 'prop-types';

import HideOnArchivedHOC from '../../../../HOCs/archive/HideOnArchivedHOC';

/**
 * @description propTypes for DirectSingleActions
 * @type {{id: (*)}}
 */
const propTypes = {
  id: PropTypes.string.isRequired,
};

const style = {
  wrapperDiv: {
    display: 'inline-block',
    marginBottom: 5,
    marginTop: 5,
    marginRight: 30,
    marginLeft: 30,
  },
};

/**
 * @function DirectSingleActions
 * @param {String} id id of direct
 * @returns {XML}
 */
function DirectSingleActions({ id }) {
  return (
    <CardActions >
      <div style={style.wrapperDiv}>
        <FloatingActionButton
          containerElement={<Link to={`/directs/${id}/meetings/new`} />}
        >
          <MeetingIcon />
        </FloatingActionButton>
        <h4>Meeting</h4>
      </div>
      <div style={style.wrapperDiv}>
        <FloatingActionButton
          containerElement={<Link to={`/directs/${id}/followUps/new`} />}
        >
          <FollowUpIcon />
        </FloatingActionButton>
        <h4>Follow Up</h4>
      </div>
    </CardActions>
  );
}

DirectSingleActions.propTypes = propTypes;

export default HideOnArchivedHOC(DirectSingleActions);
