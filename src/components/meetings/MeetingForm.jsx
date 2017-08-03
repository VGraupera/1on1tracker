import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {
  DatePicker,
  SelectField,
} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

import RichTextEditor from '../common/RichTextEditor';
import MeetingQuestions from './MeetingQuestions';

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
          component={RichTextEditor}
          hintText="Updates, questions, etc."
          floatingLabelText="Direct&apos;s Notes"
          multiLine={true}
          rows={4}
          style={{ width: '100%' }}
        />
        <Field
          name="managersNotes"
          component={RichTextEditor}
          hintText="Items discussed"
          floatingLabelText="Manager&apos;s Notes"
          multiLine={true}
          rows={4}
          style={{ width: '100%' }}
        />
        <MeetingQuestions />
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
  formType: PropTypes.oneOf(['create', 'edit']).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  directs: PropTypes.object.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({ form: 'meeting', validate })(MeetingForm);
