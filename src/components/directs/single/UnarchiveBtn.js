import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { white , teal400 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

import directAction, { archivedDirects as archivedDirectsAction } from '../../../actions/directs';
import followUpActions, { archivedFollowUps as archivedFollowUpsAction } from '../../../actions/followUps';
import meetingActions, { archivedMeetings as archivedMeetingsAction } from '../../../actions/meetings';
import OnArchivedHOC from '../../../HOCs/OnArchivedHOC';
import { ARCHIVED_URL_SUFFIX } from '../../../constants/general';

/**
 * @description propTypes for UnarchiveBtn
 * @type {Object}
 */
const propTypes = {
  id: PropTypes.string.isRequired,
  onMoveTo: PropTypes.func.isRequired,
  meetingsMoveEqualTo: PropTypes.func.isRequired,
  followUpsMoveEqualTo: PropTypes.func.isRequired,
};

/**
 * @class UnarchiveBtn
 * @extends React.Component
 * @description Render component
 */
class UnarchiveBtn extends Component {

  onUnArchived = (event) => {
    event.preventDefault();
    if (window.confirm('Unarchive the direct?')) {
      const { id } = this.props;
      this.props.onMoveTo(id, directAction)
        .then(() => {
          this.props.meetingsMoveEqualTo('directKey', id, meetingActions);
          this.props.followUpsMoveEqualTo('directKey', id, followUpActions);
        });
      browserHistory.push({
        pathname: `/directs/${ARCHIVED_URL_SUFFIX}`,
        state: { isArchived: true },
      });
    }
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    return (
      <CardActions>
        <RaisedButton
          label="Unarchive"
          onTouchTap={this.onUnArchived}
          backgroundColor={teal400}
          labelColor={white}
        />
      </CardActions>
    );
  }
}

UnarchiveBtn.propTypes = propTypes;

const mapDispatchToProps = {
  onMoveTo: archivedDirectsAction.moveTo,
  followUpsMoveEqualTo: archivedFollowUpsAction.moveEqualTo,
  meetingsMoveEqualTo: archivedMeetingsAction.moveEqualTo,
};

export default OnArchivedHOC(false)(connect(null, mapDispatchToProps)(UnarchiveBtn));
