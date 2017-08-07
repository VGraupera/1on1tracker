import React from 'react';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import HideOnArchivedHOC from '../../../HOCs/archive/HideOnArchivedHOC';

/**
 * @description Button Style
 * @type {Object}
 */
const buttonStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 76,
  left: 'auto',
  position: 'fixed',
};

/**
 * @function AddNewDirectBtn
 * @returns {XML}
 * @constructor
 */
function AddNewDirectBtn() {
  return (
    <FloatingActionButton
      style={buttonStyle}
      containerElement={<Link to="/directs/new" />}
    >
      <ContentAdd />
    </FloatingActionButton>
  );
}

export default HideOnArchivedHOC(AddNewDirectBtn);
