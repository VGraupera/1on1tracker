import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

/**
 * @description PropTypes for TeamFrom
 */
const propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  handleFormCancel: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

const defaultProps = {
  initialValues: {},
};

/**
 * @description Validation for TeamForm
 * @param {Object} values form values
 * @return {Object} errors object
 */
export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  return errors;
};
/**
 * @function TeamForm
 * @param props
 * @returns {XML}
 */
function TeamForm(props) {
  const { handleSubmit, handleFormSubmit, handleFormCancel } = props;
  return (
    <div className="container">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Field
          name="name"
          component={TextField}
          hintText="Team name"
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
TeamForm.propTypes = propTypes;
TeamForm.defaultProps = defaultProps;

export default reduxForm({
  form: 'team',
  validate,
})(TeamForm);

