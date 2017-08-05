import { connect } from 'react-redux';

import followUpActions from '../../../../actions/followUps';
import FollowUpList from './FollowUpList';
import HideOnArchivedHOC from '../../../../HOCs/archive/HideOnArchivedHOC';

const mapStateToProps = (state, ownProps) => {
  return {
    followUps: state.followUps.matchingList,
    directId: ownProps.directId,
  };
};

export default HideOnArchivedHOC(connect(
  mapStateToProps,
  {
    followUpsEqualTo: followUpActions.equalTo,
  },
)(FollowUpList));
