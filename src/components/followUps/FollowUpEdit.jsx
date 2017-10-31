import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isDirty, hasSubmitSucceeded } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter, browserHistory } from 'react-router';
import FollowUpForm from './FollowUpForm';

import followUpActions from '../../actions/followUps';

class FollowUpEdit extends Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.warnIfUnsavedChanges = this.warnIfUnsavedChanges.bind(this);
  }

  componentDidMount() {
    this.props.router.setRouteLeaveHook(
      this.props.route,
      this.warnIfUnsavedChanges,
    );
    window.onbeforeunload = () => this.warnIfUnsavedChanges();
  }

  componentDidUpdate(prevProps) {
    if (this.props.route.path !== prevProps.route.path) {
      this.props.router.setRouteLeaveHook(
        this.props.route,
        this.warnIfUnsavedChanges,
      );
    }
  }

  onDelete(event) {
    event.preventDefault(); // Fix double touchtap bug
    browserHistory.push('/followUps');
    this.props.remove(this.props.params.id).then(() => {
    });
  }

  onSubmit(followUp) {
    if (followUp.followUpDate instanceof Date) {
      followUp.followUpDateReverse = 0 - followUp.followUpDate;
      followUp.followUpDate = followUp.followUpDate.toISOString();
    }

    this.props.update(this.props.params.id, followUp).then(() => {
      browserHistory.goBack();
    });
  }

  warnIfUnsavedChanges(nextLocation) {
    if (this.props.dirty && !this.props.submitted) {
      return 'Are you sure you want to leave this page? You have unsaved changes.';
    }
  }

  render() {
    return (
      <div className="container">
        <FollowUpForm
          {...this.props}
          onSubmit={this.onSubmit}
        />
        <RaisedButton
          label="Delete"
          secondary={true}
          onTouchTap={this.onDelete}
          style={{
            marginTop: 20,
            marginBottom: 30,
            width: '100%' }}
        />
      </div>
    );
  }
}

FollowUpEdit.propTypes = {
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  dirty: PropTypes.bool.isRequired,
  submitted: PropTypes.bool.isRequired,
  router: PropTypes.shape({
    setRouteLeaveHook: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => {
  const followUp = state.followUps.activeFollowUp;
  const initialValues = {
    ...followUp,
    followUpDate: new Date(followUp.followUpDate),
  };
  return {
    initialValues,
    formType: 'edit',
    dirty: isDirty('followUp')(state),
    submitted: hasSubmitSucceeded('followUp')(state),
    error: state.followUps.error,
    directs: state.directs.list,
  };
};

const mapDispatchToProps = {
  update: followUpActions.update,
  remove: followUpActions.remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FollowUpEdit));
