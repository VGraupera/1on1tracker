import React, { Component } from 'react';
import { connect } from 'react-redux';
import FollowUpForm from './FollowUpForm';
import followUpActions from '../../actions/followUps';
import * as headerActions from '../../actions/header';

class FollowUpNew extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    if (!this.props.initialValues.directKey) {
      this.props.initialValues.directKey = this.props.params.id;
    }
    this.props.reset();
  }

  componentDidMount() {
    this.props.setText('New Follow Up');
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  onSubmit(followUp) {
    if (followUp.followUpDate instanceof Date) {
      followUp.followUpDateReverse = 0 - followUp.followUpDate;
      followUp.followUpDate = followUp.followUpDate.toISOString();
    }
    this.props.create(followUp);
  }

  render() {
    return (
      <div className="container">
        <FollowUpForm
          {...this.props}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

FollowUpNew.propTypes = {
  create: React.PropTypes.func.isRequired,
  setText: React.PropTypes.func.isRequired,
  reset: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const initialValues = {
    followUpDate: new Date(),
  };
  return {
    initialValues,
    formType: 'create',
    error: state.followUps.error,
    directs: state.directs.list,
  };
};

export default connect(mapStateToProps,
  { create: followUpActions.create,
    reset: followUpActions.resetActive,
    setText: headerActions.setText,
  })(FollowUpNew);
