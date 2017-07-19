import { connect } from 'react-redux';

import OnArchivedHOC from '../../../HOCs/OnArchivedHOC';
import { getArchivedArray } from '../../../selectors/archivedDirects';
import DirectList from './DirectList';

const mapStateToProps = state => ({
  directs: getArchivedArray(state),
  sortBy: state.archivedDirects.sortBy,
});

export default OnArchivedHOC(false)(connect(mapStateToProps)(DirectList));
