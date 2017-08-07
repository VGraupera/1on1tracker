import React, { Component } from 'react';
import { Field } from 'redux-form';
import Divider from 'material-ui/Divider';
import { SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

import TeamCrudDialogBoxContainer from './dialog/TeamCrudDialogBoxContainer';

/**
 * @description propTypes for TeamsDropDownField
 * @type {{teams}}
 */
const propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

/**
 * @class TeamsDropDownField
 * @extends React.Component
 * @description Render component
 */
class TeamsDropDownField extends Component {

  state = {
    openDialog: false,
  };

  handleOpenDialog = () => {
    this.setState({ openDialog: true });
  };

  handleCloseDialog = () => {
    this.setState({ openDialog: false });
  };

  render() {
    const { teams } = this.props;
    return (
      <div>
        <Field
          name="team"
          component={SelectField}
          hintText="Team"
          floatingLabelText="Team"
          value={false}
          style={{ width: '100%' }}
        >
          <MenuItem
            value={false}
            key={'no_team'}
            primaryText="No Team"
          />
          <Divider />
          {teams.map(team => (
            <MenuItem
              key={team.id}
              value={team.id}
              primaryText={team.name}
            />
        ))}
          <Divider />
          <MenuItem
            key="edit_team"
            primaryText="Edit Team"
            onTouchTap={this.handleOpenDialog}
          />
        </Field>
        <TeamCrudDialogBoxContainer
          openDialog={this.state.openDialog}
          handleCloseDialog={this.handleCloseDialog}
        />
      </div>
    );
  }
}

TeamsDropDownField.propTypes = propTypes;

export default TeamsDropDownField;
