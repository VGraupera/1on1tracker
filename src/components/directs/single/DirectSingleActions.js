import React from 'react';
import { CardActions } from 'material-ui/Card';
import { Link } from 'react-router';
import {
  List,
  ListItem,
} from 'material-ui/List';
import MeetingIcon from 'material-ui/svg-icons/action/speaker-notes';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import FollowUpIcon from 'material-ui/svg-icons/action/assignment';
import PropTypes from 'prop-types';

import OnArchivedHOC from '../../../HOCs/OnArchivedHOC';

/**
 * @description propTypes for DirectSingleActions
 * @type {{id: (*)}}
 */
const propTypes = {
  id: PropTypes.string.isRequired,
};

/**
 * @function DirectSingleActions
 * @param {String} id id of direct
 * @returns {XML}
 */
function DirectSingleActions({ id }) {
  return (
    <CardActions>
      <List>
        <ListItem
          primaryText="New Meeting"
          leftIcon={<MeetingIcon />}
          containerElement={<Link to={`/directs/${id}/meetings/new`} />}
        />
        <ListItem
          primaryText="New Follow Up"
          leftIcon={<FollowUpIcon />}
          containerElement={<Link to={`/directs/${id}/followUps/new`} />}
        />
        <ListItem
          primaryText="Edit"
          leftIcon={<EditIcon />}
          containerElement={<Link to={`/directs/${id}/edit`} />}
        />
      </List>
    </CardActions>
  );
}

DirectSingleActions.propTypes = propTypes;

export default OnArchivedHOC(true)(DirectSingleActions);
