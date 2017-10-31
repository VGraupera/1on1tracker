import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {
  DatePicker,
  TextField,
  SelectField,
  Checkbox,
} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

export const validate = (values) => {
  const errors = {};
  const requiredFields = ['directKey', 'followUpDate'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

class FollowUpForm extends Component {
  static formatDate(date) {
    return date.toLocaleDateString();
  }

  renderDirects() {
    const rows = [];

    this.props.directs.forEach((direct, key) => {
      rows.push(<MenuItem key={key} value={key} primaryText={direct.name} />);
    });

    return rows;
  }

  render() {
    const { formType, handleSubmit, pristine, submitting } = this.props;
    const submitText = formType === 'edit' ? 'Update' : 'Create';

    return (
      <form className="followUp" onSubmit={handleSubmit(this.props.onSubmit)}>
        <Field
          name="completed"
          component={Checkbox}
          label="Completed"
        />
        <Field
          name="directKey"
          component={SelectField}
          hintText="Direct"
          floatingLabelText="Direct*"
          style={{ width: '100%' }}
        >
          {this.renderDirects()}
        </Field>
        <Field
          name="followUpDate"
          component={DatePicker}
          formatDate={FollowUpForm.formatDate}
          autoOk={true}
          hintText="Due Date"
          floatingLabelText="Due Date*"
        />
        <Field
          name="description"
          component={TextField}
          hintText="What needs to be done?"
          floatingLabelText="What needs to be done?"
          multiLine={true}
          rows={4}
          style={{ width: '100%' }}
        />
        <div>
          <RaisedButton
            type="submit"
            label={submitText}
            primary={true}
            disabled={pristine || submitting}
            style={{ width: '100%' }}
          />
        </div>
      </form>
    );
  }
}

FollowUpForm.propTypes = {
  formType: PropTypes.oneOf(['create', 'edit']),
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  directs: PropTypes.object.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default reduxForm({ form: 'followUp', validate })(FollowUpForm);
