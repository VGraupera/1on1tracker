import { connect } from 'react-redux';

import { getDirectsArrayWithTeam } from '../../../selectors/direct';
import DirectList from './DirectList';
import OnArchivedHOC from '../../../HOCs/OnArchivedHOC';

const mapStateToProps = (state) => {
  return {
    directs: getDirectsArrayWithTeam(state),
    sortBy: state.directs.sortBy,
  };
};

export default OnArchivedHOC()(connect(mapStateToProps)(DirectList));