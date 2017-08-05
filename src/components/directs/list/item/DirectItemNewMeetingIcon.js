import React from 'react';
import { browserHistory } from 'react-router';
import IconButton from 'material-ui/IconButton';
import MeetingIcon from 'material-ui/svg-icons/communication/chat';
import { grey400 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

import HideOnArchivedHOC from '../../../../HOCs/archive/HideOnArchivedHOC';

/**
 * @description PropTypes for DirectItemNewMeetingIcon
 * @type {Object}
 */
const propTypes = {
  id: PropTypes.string.isRequired,
};

/**
 * @function DirectItemNewMeetingIcon
 * @param props
 * @returns {XML}
 * @constructor
 */
function DirectItemNewMeetingIcon(props) {
  const { id, ...IconButtonProps } = props;

  const handleClick = (e) => {
    e.preventDefault();
    browserHistory.push(`/directs/${props.id}/meetings/new`);
  };

  return (
    <IconButton
      {...IconButtonProps}
      touch={true}
      onTouchTap={handleClick}
    >
      <MeetingIcon color={grey400} />
    </IconButton>
  );
}

DirectItemNewMeetingIcon.propTypes = propTypes;

export default HideOnArchivedHOC(DirectItemNewMeetingIcon);
