import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { teal400, white } from 'material-ui/styles/colors';

import DirectForm, { validate } from './DirectForm';
import directActions, { archivedDirects } from '../../../actions/directs';
import followUpActions, { archivedFollowUps } from '../../../actions/followUps';
import meetingActions, { archivedMeetings } from '../../../actions/meetings';
import { getTeamsArray } from '../../../selectors/teams';

class DirectEdit extends Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDelete(event) {
    event.preventDefault(); // Fix double touchtap bug
    if (window.confirm('Delete the direct?')) {
      browserHistory.push('/directs');
      this.props.remove(this.props.params.id).then(() => {
        this.props.followUpsRemoveEqualTo('directKey', this.props.params.id);
        this.props.meetingsRemoveEqualTo('directKey', this.props.params.id);
      });
    }
  }

  onSubmit(direct) {
    this.props.update(this.props.params.id, direct).then(() => {
      browserHistory.push('/directs');
    });
  }

  onArchived = () => {
    if (window.confirm('Archive the direct?')) {
      this.props.onMoveTo(this.props.params.id, archivedDirects)
        .then(() => {
          this.props.meetingsMoveEqualTo('directKey', this.props.params.id, archivedMeetings);
          this.props.followUpsMoveEqualTo('directKey', this.props.params.id, archivedFollowUps);
        });
      browserHistory.push('/directs');
    }
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
          style={{marginTop: 20}}
          onTouchTap={this.onDelete}
        />
        <RaisedButton
          label="Archive"
          style={{marginTop: 20,marginLeft:10}}
          onTouchTap={this.onArchived}
          backgroundColor={teal400}
          labelColor={white}
        />
      </div>
    );
  }
}

DirectEdit.propTypes = {
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
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
    teams: getTeamsArray(state),
  };
};

const mapDispatchToProps = {
  update: directActions.update,
  remove: directActions.remove,
  followUpsRemoveEqualTo: followUpActions.removeEqualTo,
  meetingsRemoveEqualTo: meetingActions.removeEqualTo,
  onMoveTo: directActions.moveTo,
  followUpsMoveEqualTo: followUpActions.moveEqualTo,
  meetingsMoveEqualTo: meetingActions.moveEqualTo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(reduxForm({ form: 'direct', validate })(DirectEdit));
