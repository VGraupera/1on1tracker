import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

/**
 * @description PropTypes for QuestionForm
 * @type {Object}
 */
const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleFormCancel: PropTypes.func.isRequired,
};

/**
 * @description validation for Question form
 * @param values
 * @return {{}}
 */
export const validate = (values) => {
  const errors = {};
  if (!values.question) {
    errors.question = 'Required';
  }
  return errors;
};

/**
 * @description QuestionForm
 * @param {Function} handleSubmit
 * @param {Function} handleFormSubmit
 * @param {Function} handleFormCancel
 * @return {XML}
 */
function QuestionForm({ handleSubmit, handleFormSubmit, handleFormCancel }) {
  return (
    <div className="container">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Field
          name="question"
          component={TextField}
          hintText="Question"
          floatingLabelText="Question"
          style={{ width: '100%' }}
        />
        <div>
          <RaisedButton
            type="submit"
            label="Save"
            primary={true}
          />

          <RaisedButton
            label="Cancel"
            onTouchTap={handleFormCancel}
          />
        </div>
      </form>
    </div>
  );
}

QuestionForm.propTypes = propTypes;

export default reduxForm({
  form: 'questions',
  validate,
})(QuestionForm);
