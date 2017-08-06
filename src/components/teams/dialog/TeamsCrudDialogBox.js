import React from 'react';
import PropTypes from 'prop-types';

import CrudDialogBox from '../../common/crud-dialog-box/CrudDialogBox';
import TeamList from './TeamList';
import TeamForm from '../TeamForm';

const propTypes = {
  openDialog: PropTypes.bool.isRequired,
  handleCloseDialog: PropTypes.func.isRequired,
  teams: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

/**
 * @function TeamsCrudDialogBox
 * @param props
 * @returns {XML}
 */
function TeamsCrudDialogBox(props) {
  const {
    openDialog,
    handleCloseDialog,
    teams,
    onDelete,
    submitForm,
  } = props;

  return (
    <CrudDialogBox
      title="Team"
      openDialog={openDialog}
      handleCloseDialog={handleCloseDialog}
      list={teams}
      ListComponent={TeamList}
      onDeleteItem={onDelete}
      FormComponent={TeamForm}
      submitForm={submitForm}
    />
  );
}

TeamsCrudDialogBox.propTypes = propTypes;

export default TeamsCrudDialogBox;
