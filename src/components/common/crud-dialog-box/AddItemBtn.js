import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';

const propTypes = {
  handleAddItem: PropTypes.func.isRequired,
};

/**
 * @function AddItemBtn
 * @param {Function} handleAddItem
 * @returns {XML}
 */
function AddItemBtn({ handleAddItem }) {
  return (
    <FloatingActionButton onTouchTap={handleAddItem} >
      <ContentAdd />
    </FloatingActionButton>
  );
}

AddItemBtn.propTypes = propTypes;

export default AddItemBtn;
