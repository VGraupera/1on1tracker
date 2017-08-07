import { connect } from 'react-redux';

import ShowOnArchivedHOC from '../../../HOCs/archive/ShowOnArchivedHOC';
import { getArchivedDirectsArrayWithTeam } from '../../../selectors/archivedDirects';
import DirectList from './DirectList';

const mapStateToProps = state => ({
  directs: getArchivedDirectsArrayWithTeam(state),
  sortBy: state.archivedDirects.sortBy,
});

export default ShowOnArchivedHOC(connect(mapStateToProps)(DirectList));
