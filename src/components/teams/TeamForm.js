import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

/**
 * @description PropTypes for TeamFrom
 */
const propTypes = {
  initialValues: PropTypes.object,
  onSubmitTeamForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
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
 * @class TeamForm
 * @extends React.Component
 * @description Render component
 */
class TeamForm extends Component {

  /**
   * @description Handle submit form
   * @param {Object} data form data
   */
  handleFormSubmit = (data) => {
    this.props.onSubmitTeamForm(data);
    browserHistory.goBack();
  };

  /**
   * @description Handle cancel
   */
  handleCancel = () => {
    browserHistory.goBack();
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
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
              onTouchTap={this.handleCancel}
            />
          </div>
        </form>
      </div>
    );
  }
}
TeamForm.propTypes = propTypes;
export default reduxForm({
  form: 'team',
  validate,
})(TeamForm);

