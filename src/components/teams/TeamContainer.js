import { connect } from 'react-redux';
import * as headerActions from '../../actions/header';
import { getTeamsArray } from '../../selectors/teams';

import TeamList from './TeamList';

const mapDispatchToProps = dispatch => ({
  setText: (text) => {
    dispatch(headerActions.setText(text));
  },
});

/**
 * @description map state to props
 * @param {Object} state state data
 */
const mapStateToProps = state => ({
  teams: getTeamsArray(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
