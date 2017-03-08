import React, { Component } from 'react';
import { isDirty, hasSubmitSucceeded } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router';
import FollowUpForm from './FollowUpForm';

import followUpActions from '../../actions/followUps';
import * as headerActions from '../../actions/header';

class FollowUpEdit extends Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.warnIfUnsavedChanges = this.warnIfUnsavedChanges.bind(this);
  }

  componentDidMount() {
    this.props.setText('Edit Follow Up');
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

  onDelete() {
    this.props.remove(this.props.params.id);
  }

  onSubmit(followUp) {
    if (followUp.followUpDate instanceof Date) {
      followUp.followUpDateReverse = 0 - followUp.followUpDate;
      followUp.followUpDate = followUp.followUpDate.toISOString();
    }
    this.props.update(this.props.params.id, followUp);
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
          style={{ marginTop: 20 }}
          onTouchTap={this.onDelete}
        />
      </div>
    );
  }
}

FollowUpEdit.propTypes = {
  update: React.PropTypes.func.isRequired,
  remove: React.PropTypes.func.isRequired,
  setText: React.PropTypes.func.isRequired,
  params: React.PropTypes.object.isRequired,
  route: React.PropTypes.object.isRequired,
  dirty: React.PropTypes.bool.isRequired,
  submitted: React.PropTypes.bool.isRequired,
  router: React.PropTypes.shape({
    setRouteLeaveHook: React.PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => {
  const followUp = state.followUps.activeFollowUp;
  const initialValues = {
    ...followUp,
    followUpDate: new Date(followUp.followUpDate),
    completed: !!followUp.completedAt,
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
  setText: headerActions.setText,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FollowUpEdit));
