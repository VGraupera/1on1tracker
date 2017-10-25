import React from 'react';
import { CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';
import StartDateIcon from 'material-ui/svg-icons/notification/event-note';

const propTypes = {
  startDate: PropTypes.string.isRequired,
};

/**
 * @function StartDate
 * @param {String} startDate
 * @param {Object} cardTextProps CardText props
 * @returns {XML}
 */
function StartDate({ startDate, ...cardTextProps }) {
  const date = new Date(startDate).toLocaleDateString();
  return (
    <CardText {...cardTextProps} >
      <StartDateIcon />
      {date}
    </CardText>
  );
}

StartDate.propTypes = propTypes;

export default StartDate;
