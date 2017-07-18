import { connect } from 'react-redux';
import meetingActions from '../../actions/meetings';

import {
  getMeetingsInSameDirectAsActive,
  getIndexOfActiveMeating,
} from '../../selectors/meetings';
import MeetingNavigationIcons from './MeetingNavigationIcons';

const mapStateToProps = (state, ownProps) => {
  return {
  indexOfActive: getIndexOfActiveMeating(state, ownProps),
  meetings: getMeetingsInSameDirectAsActive(state, ownProps),
}};

const mapDispatchToProps = (dispatch) => ({
  setActiveMeating : (id) => {
    dispatch(meetingActions.find(id));
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(MeetingNavigationIcons);
