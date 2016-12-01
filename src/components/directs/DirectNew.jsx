import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import DirectForm, { validate } from './DirectForm';
import directActions from '../../actions/directs';
import * as headerActions from '../../actions/header';

class DirectNew extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.reset();
  }

  componentDidMount() {
    this.props.setText('New Direct');
  }

  onSubmit(direct) {
    this.props.create(direct);
  }

  render() {
    return (
      <div className="container">
        <DirectForm {...this.props} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

DirectNew.propTypes = {
  create: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    formType: 'create',
    error: state.directs.error,
  };
};

export default connect(mapStateToProps,
  { create: directActions.create,
    reset: directActions.resetActive,
    setText: headerActions.setText,
  })(reduxForm({ form: 'direct', validate })(DirectNew));
