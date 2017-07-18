import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
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

  if (meetings.length === 1) {
    return null;
  }

  const iconStyle = {
    width: 36,
    height: 36,
    color: white,
    opacity: 0.5,
  };

  let prevLink = { iconStyle };
  let nextLink = { iconStyle };

  const prevIndex = indexOfActive - 1;
  const nextIndex = indexOfActive + 1;

  if (meetings[prevIndex]) {
    prevLink = {
      ...prevLink,
      ...{
        containerElement: <Link to={`/meetings/${meetings[prevIndex].id}`} />,
        iconStyle: { ...prevLink.iconStyle, ...{ opacity: 1 } },
      },
    };
  }
  if (meetings[nextIndex]) {
    nextLink = {
      ...nextLink,
      ...{
        containerElement: <Link to={`/meetings/${meetings[nextIndex].id}`} />,
        iconStyle: { ...prevLink.iconStyle, ...{ opacity: 1 } },
      },
    };
  }
  return (
    <div>
      <IconButton
        {...nextLink}
        disableTouchRipple={true}
      >
        <NavigationChevronLeft />
      </IconButton>
      <IconButton
        {...prevLink}
        disableTouchRipple={true}
      >
        <NavigationChevronRight />
      </IconButton>
    </div>
  );
}

MeetingNavigationIcons.propTypes = propTypes;

export default MeetingNavigationIcons;
