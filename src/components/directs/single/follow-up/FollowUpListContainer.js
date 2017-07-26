import { connect } from 'react-redux';

import followUpActions from '../../../../actions/followUps';
import FollowUpList from './FollowUpList';
import OnArchivedHOC from '../../../../HOCs/OnArchivedHOC';

const mapStateToProps = (state, ownProps) => {
  return {
    followUps: state.followUps.matchingList,
    directId: ownProps.directId,
  };
};

export default OnArchivedHOC(true)(connect(
  mapStateToProps,
  {
    followUpsEqualTo: followUpActions.equalTo,
  },
)(FollowUpList));
