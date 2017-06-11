import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {
  DatePicker,
  TextField,
  SelectField,
} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

export const validate = (values) => {
  const errors = {};
  const requiredFields = ['directKey', 'meetingDate'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

class MeetingForm extends Component {
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
      <form onSubmit={handleSubmit(this.props.onSubmit)}>
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
          name="meetingDate"
          component={DatePicker}
          formatDate={MeetingForm.formatDate}
          autoOk={true}
          hintText="Meeting Date"
        />
        <Field
          name="directsNotes"
          component={TextField}
          hintText="Updates, questions, etc."
          floatingLabelText="Direct&apos;s Notes"
          multiLine={true}
          rows={4}
          style={{ width: '100%' }}
        />
        <Field
          name="managersNotes"
          component={TextField}
          hintText="Items discussed"
          floatingLabelText="Manager&apos;s Notes"
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
          />
        </div>
      </form>
    );
  }
}

MeetingForm.propTypes = {
  formType: PropTypes.oneOf(['create', 'edit']),
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  directs: PropTypes.object.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default reduxForm({ form: 'meeting', validate })(MeetingForm);
