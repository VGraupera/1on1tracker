import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import {
  DatePicker,
  SelectField,
  TextField,
} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import isMobilePhone from 'validator/lib/isMobilePhone';

const isValidPhone = (phone) => {
  return isMobilePhone(phone.replace(/-/g, ''), 'en-US');
};

export const validate = (values) => {
  const errors = {};
  const requiredFields = ['name'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  const {phone} = values;
  if (phone && !isValidPhone(phone)) {
    errors.phone = 'Invalid phone number.';
  }
  return errors;
};

export default class DirectForm extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.refs.name            // the Field
      .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
      .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
      .focus();                // on TextField
  }

  onSubmit(direct) {
    this.props.onSubmit(direct);
  }

  formatDate(date) {
    return date.toLocaleDateString();
  }

  render() {
    const {formType, handleSubmit, pristine, submitting, teams} = this.props;
    const submitText = formType === 'edit' ? 'Update' : 'Create';
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="name"
          component={TextField}
          hintText="Name"
          floatingLabelText="Name*"
          ref="name" withRef
          style={{width: '100%'}}
        />
        <Field
          name="title"
          component={TextField}
          hintText="Job Title"
          floatingLabelText="Job Title"
          style={{width: '100%'}}
        />
        <Field
          name="team"
          component={SelectField}
          hintText="Team"
          floatingLabelText="Team"
          value={false}
          style={{width: '100%'}}
        >
          <MenuItem
            value={false}
            key={'no_team'}
            primaryText="No Team"
          />
          {teams.map(team => (
            <MenuItem
              key={team.id}
              value={team.id}
              primaryText={team.name}
            />
          ))}

        </Field>
        <Field
          name="phone"
          component={TextField}
          type="tel"
          hintText="Phone number"
          floatingLabelText="Phone number"
          style={{width: '100%'}}
        />
        <Field
          name="startDate"
          component={DatePicker}
          formatDate={this.formatDate}
          autoOk={true}
          hintText="Start Date"
        />
        <Field
          name="notes"
          component={TextField}
          hintText="Notes"
          floatingLabelText="Notes"
          multiLine={true}
          rows={4}
          style={{width: '100%'}}
        />
        <div>
          <RaisedButton
            type="submit"
            label={submitText}
            primary={true}
            disabled={pristine || submitting}
          />
        </div>
      </form>
    );
  }
}

DirectForm.propTypes = {
  formType: PropTypes.oneOf(['create', 'edit']),
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
};
