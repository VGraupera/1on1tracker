import React, { Component, PropTypes } from 'react';
import { Field } from 'redux-form';
import {
  DatePicker,
  TextField,
  SelectField,
} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

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

export default class MeetingForm extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onSubmit(direct) {
    this.props.onSubmit(direct);
  }

  onCancel() {
    this.context.router.goBack();
  }

  formatDate(date) {
    return date.toLocaleDateString();
  }

  renderDirects() {
    let rows = [];

    this.props.directs.forEach((direct, index) => {
      const key = this.props.directsKeys[index];
      rows.push(<MenuItem key={index} value={key} primaryText={direct.name} />);
    });

    return rows;
  }

  render() {
    const { formType, handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="directKey"
          component={SelectField}
          hintText="Direct"
          floatingLabelText="Direct"
          style={{ width: '100%' }}
        >
          {this.renderDirects()}
        </Field>
        <Field
          name="meetingDate"
          component={DatePicker}
          formatDate={this.formatDate}
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
          {formType === 'edit' ? (
            <RaisedButton
              type="submit"
              label="Update"
              primary={true}
              disabled={pristine || submitting} />
          ) : (
            <RaisedButton
              type="submit"
              label="Create"
              primary={true}
              disabled={pristine || submitting}
            />
          )}
        </div>
      </form>
    );
  }
}

MeetingForm.contextTypes = {
  router: React.PropTypes.object,
};

MeetingForm.propTypes = {
  formType: PropTypes.oneOf(['create', 'edit']),
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  onDelete: PropTypes.func,
};
