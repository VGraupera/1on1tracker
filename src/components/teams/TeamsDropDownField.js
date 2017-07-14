import React from 'react';
import { Field } from 'redux-form';
import Divider from 'material-ui/Divider';
import { SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

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
  location: PropTypes.object.isRequired,
};


/**
 * @function TeamsDropDownField
 * @param {Object} props
 * @returns {XML}
 */
function TeamsDropDownField(props) {
  const { teams, location } = props;
  return (
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
        value="edit_teams"
        key={'edit_teams'}
        primaryText="Edit Teams"
        containerElement={<Link to={{ pathname: '/teams', state: { backTeamLink: location.pathname } }} />}
      />
    </Field>
  );
}

TeamsDropDownField.propTypes = propTypes;

export default TeamsDropDownField;

