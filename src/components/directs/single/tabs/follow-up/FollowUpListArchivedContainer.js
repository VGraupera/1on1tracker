import { connect } from 'react-redux';

import { archivedFollowUps } from '../../../../../actions/followUps';
import FollowUpList from './FollowUpList';
import ShowOnArchivedHOC from '../../../../../HOCs/archive/ShowOnArchivedHOC';

const mapStateToProps = (state, ownProps) => {
  return {
    followUps: state.archivedFollowUp.matchingList,
    directId: ownProps.directId,
  };
};

export default ShowOnArchivedHOC(connect(
  mapStateToProps,
  {
    followUpsEqualTo: archivedFollowUps.equalTo,
  },
)(FollowUpList));
