import { connect } from 'react-redux';

import { getDirectsArrayWithTeam } from '../../../selectors/direct';
import DirectList from './DirectList';

const mapStateToProps = (state) => {
  return {
    directs: getDirectsArrayWithTeam(state),
    sortBy: state.directs.sortBy,
  };
};

export default connect(mapStateToProps)(DirectList);