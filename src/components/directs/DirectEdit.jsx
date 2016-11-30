import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import DirectForm, { validate } from './DirectForm';
import directActions from '../../actions/directs';

class DirectEdit extends Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDelete() {
    this.props.remove(this.props.params.id);
  }

  onSubmit(direct) {
    this.props.update(this.props.params.id, direct);
  }

  render() {
    return (
      <div className="container">
        <h2>Edit Direct</h2>
        <DirectForm
          {...this.props}
          onSubmit={this.onSubmit}
        />
        <RaisedButton label="Delete"
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
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'direct', validate })(DirectEdit));
