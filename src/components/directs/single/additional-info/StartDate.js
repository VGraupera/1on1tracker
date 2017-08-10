import React from 'react';
import { CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';

const propTypes = {
  startDate: PropTypes.string.isRequired,
};

/**
 * @function StartDate
 * @param {String} startDate
 * @param {Object} cardTextProps CardText props
 * @returns {XML}
 */
function StartDate({startDate, ...cardTextProps}) {
  const date = new Date(startDate).toLocaleDateString()
  return (
    <CardText {...cardTextProps} >
      {date}
    </CardText>
  );
}

StartDate.propTypes = propTypes;

export default StartDate;
