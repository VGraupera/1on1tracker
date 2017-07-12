import { connect } from 'react-redux';

import { getTeam } from '../../selectors/teams';
import TeamForm from './TeamForm';
import teamAction from '../../actions/teams';

/**
 * @description map state to props for TeamList
 * @param {Object} state app state
 * @param {Object} ownProps components props
 * @return {Object}
 */
const mapStateToProps = (state, ownProps) => ({
  initialValues: ownProps.route.path === 'new' ? null : getTeam(ownProps.params.id)(state),
});

/**
 * @description Map dispatch to TeamList
 * @param {Function} dispatch the dispatch function
 * @return {Object}
 */
const mapDispatchToProps = dispatch => ({
  onSubmitTeamForm: (data) => {
    if (data.id) {
      dispatch(teamAction.update(data.id, { name: data.name }));
    } else {
      dispatch(teamAction.create(data));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);
