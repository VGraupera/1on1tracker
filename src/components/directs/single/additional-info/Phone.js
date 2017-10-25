import React from 'react';
import { CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';

const propTypes = {
  phone: PropTypes.string.isRequired,
};

/**
 * @function Phone
 * @param {Number} phone
 * @param {Object} cardTextProps CardText props
 * @returns {XML}
 */
function Phone({ phone, ...cardTextProps }) {
  return (
    <CardText {...cardTextProps} >
      <PhoneIcon />
      <a href={`tel:${phone}`}>
        {phone}
      </a>
    </CardText>
  );
}

Phone.propTypes = propTypes;

export default Phone;

