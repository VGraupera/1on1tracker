import { connect } from 'react-redux';
import teamAction from '../../actions/teams';
import { getTeamsArrayWithDeleteFlag } from '../../selectors/teams';

import TeamList from './TeamList';

const mapDispatchToProps = dispatch => ({
  handleOnClickDelete: (id) => {
    dispatch(teamAction.remove(id));
  },
});

/**
 * @description map state to props
 * @param {Object} state state data
 */
const mapStateToProps = state => ({
  teams: getTeamsArrayWithDeleteFlag(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
