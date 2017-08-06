import { connect } from 'react-redux';

import TeamsCrudDialogBox from './TeamsCrudDialogBox';
import teamAction from '../../../actions/teams';
import { getTeamsArrayWithDeleteFlag } from '../../../selectors/teams';

const mapStateToProps = state => ({
  teams: getTeamsArrayWithDeleteFlag(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: (id) => {
    dispatch(teamAction.remove(id));
  },
  submitForm: (data) => {
    if (data.id) {
      dispatch(teamAction.update(data.id, { name: data.name }));
    } else {
      dispatch(teamAction.create(data));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamsCrudDialogBox);
