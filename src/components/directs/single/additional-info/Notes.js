import React from 'react';
import { CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';

const propTypes = {
  notes: PropTypes.string.isRequired,
};

/**
 * @function Notes
 * @param {String} notes
 * @param {Object} cardTextProps CardText props
 * @returns {XML}
 */
function Notes({ notes, ...cardTextProps }) {
  return (
    <CardText {...cardTextProps} >
      {notes}
    </CardText>
  );
}

Notes.propTypes = propTypes;

export default Notes;
