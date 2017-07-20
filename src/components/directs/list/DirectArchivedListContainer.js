import { connect } from 'react-redux';

import OnArchivedHOC from '../../../HOCs/OnArchivedHOC';
import { getArchivedDirectsArrayWithTeam } from '../../../selectors/archivedDirects';
import DirectList from './DirectList';

const mapStateToProps = state => ({
  directs: getArchivedDirectsArrayWithTeam(state),
  sortBy: state.archivedDirects.sortBy,
});

export default OnArchivedHOC(false)(connect(mapStateToProps)(DirectList));
