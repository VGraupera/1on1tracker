import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import DirectForm, { validate } from './DirectForm';
import directActions from '../../actions/directs';
import * as headerActions from '../../actions/header';

class DirectEdit extends Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.setText('Edit Direct');
  }

  onDelete(event) {
    event.preventDefault(); // Fix double touchtap bug
    this.props.remove(this.props.params.id).then(() => {
      browserHistory.push('/directs');
    });
  }

  onSubmit(direct) {
    this.props.update(this.props.params.id, direct).then(() => {
      browserHistory.goBack();
    });
  }

  render() {
    return (
      <div className="container">
        <DirectForm
          {...this.props}
          onSubmit={this.onSubmit}
        />
        <RaisedButton
          label="Delete"
          secondary={true}
          style={{ marginTop: 20 }}
          onTouchTap={this.onDelete}
        />
      </div>
    );
  }
}

DirectEdit.propTypes = {
  update: React.PropTypes.func.isRequired,
  remove: React.PropTypes.func.isRequired,
  setText: React.PropTypes.func.isRequired,
  params: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const direct = state.directs.activeDirect;
  const initialValues = { ...direct,
    startDate: direct.startDate ? new Date(direct.startDate) : null,
  };
  return {
    initialValues,
    formType: 'edit',
    error: state.directs.error,
  };
};

const mapDispatchToProps = {
  update: directActions.update,
  remove: directActions.remove,
  setText: headerActions.setText,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(reduxForm({ form: 'direct', validate })(DirectEdit));
