import React from 'react';
import Avatar from 'material-ui/Avatar';
import tinycolor from 'tinycolor2';
import { grey400, grey900 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
};

const defaultProps = {
  category: '',
};

const initials = (name) => {
  return name.split(' ').map(w => w[0]).join('');
};

/**
 * @function DirectAvatar
 * @param {String} name Direct name
 * @param {String} category Direct color catagory
 * @returns {XML}
 */
function DirectAvatar({ name, category, ...avatarProps }) {
  let avatarColor = '#ffffff';
  let avatarBgColor = grey400;

  if (category) {
    avatarBgColor = category;
    avatarColor = tinycolor.mostReadable(category, [grey900, '#ffffff']).toHexString();
  }

  return (
    <Avatar
      color={avatarColor}
      backgroundColor={avatarBgColor}
      {...avatarProps}
    >
      {initials(name)}
    </Avatar>
  );
}

DirectAvatar.propTypes = propTypes;
DirectAvatar.defaultProps = defaultProps;

export default DirectAvatar;
