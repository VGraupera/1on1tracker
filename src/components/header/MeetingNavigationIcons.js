import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
import { white } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

const propTypes = {
  indexOfActive: PropTypes.number.isRequired,
  meetings: PropTypes.array.isRequired,
};

/**
 * @function MeetingNavigationIcons
 * @param props
 * @returns {XML}
 * @constructor
 */
function MeetingNavigationIcons(props) {
  const { indexOfActive, meetings } = props;
  if (meetings.length === 1) return null;

  let prevIcon = null;
  let nextIcon = null;

  const prevIndex = indexOfActive - 1;
  const nextIndex = indexOfActive + 1;

  if (meetings[prevIndex]) {
    prevIcon = (
      <IconButton
        containerElement={<Link to={`/meetings/${meetings[prevIndex].id}`} />}
      >
        <FontIcon
          color={white}
          className="material-icons"
        >
          chevron_left
        </FontIcon>
      </IconButton>
    );
  }
  if (meetings[nextIndex]) {
    nextIcon = (
      <IconButton
        containerElement={<Link to={`/meetings/${meetings[nextIndex].id}`} />}
      >
        <FontIcon
          color={white}
          className="material-icons"
        >
          chevron_right
        </FontIcon>
      </IconButton>
    );
  }
  return (
    <div>
      {prevIcon}
      {nextIcon}
    </div>
  );
}

MeetingNavigationIcons.propTypes = propTypes;

export default MeetingNavigationIcons;
