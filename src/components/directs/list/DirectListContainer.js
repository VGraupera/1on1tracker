import { connect } from 'react-redux';

import { getDirectsArrayWithTeam } from '../../../selectors/direct';
import DirectList from './DirectList';
import HideOnArchivedHOC from '../../../HOCs/archive/HideOnArchivedHOC';

const mapStateToProps = (state) => {
  return {
    directs: getDirectsArrayWithTeam(state),
    sortBy: state.directs.sortBy,
  };
};

export default HideOnArchivedHOC(connect(mapStateToProps)(DirectList));