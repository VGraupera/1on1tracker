import React from 'react';
import PropTypes from 'prop-types';

import CrudDialogBox from '../../common/crud-dialog-box/CrudDialogBox';
import TeamList from './TeamList';
import TeamForm from './TeamForm';

const propTypes = {
  openDialog: PropTypes.bool.isRequired,
  handleCloseDialog: PropTypes.func.isRequired,
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
    onDelete,
    submitForm,
  } = props;

  const dialogProps = {
    title: 'Team',
    openDialog,
    handleCloseDialog,
    ListComponent: TeamList,
    onDeleteItem: onDelete,
    FormComponent: TeamForm,
    submitForm,
  };

  return (
    <CrudDialogBox
      {... dialogProps}
    />
  );
}

TeamsCrudDialogBox.propTypes = propTypes;

export default TeamsCrudDialogBox;
