import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';


export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  return errors;
};


/**
 * @class QuestionForm
 * @extends React.Component
 * @description Render component
 */
class QuestionForm extends Component {

  handleSubmitForm = (data)=>{
    this.props.handleFormSubmit(data);
  };
  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.handleSubmitForm)}>
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
              onTouchTap={this.props.handleFormCancel}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'questions',
  validate,
})(QuestionForm);
