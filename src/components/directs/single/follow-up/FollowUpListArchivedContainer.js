import { connect } from 'react-redux';

import { archivedFollowUps } from '../../../../actions/followUps';
import FollowUpList from './FollowUpList';
import OnArchivedHOC from '../../../../HOCs/OnArchivedHOC';

const mapStateToProps = (state, ownProps) => {
  return {
    followUps: state.archivedFollowUp.matchingList,
    directId: ownProps.directId,
  };
};

export default OnArchivedHOC(false)(connect(
  mapStateToProps,
  {
    followUpsEqualTo: archivedFollowUps.equalTo,
  },
)(FollowUpList));
