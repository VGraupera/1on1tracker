import { connect } from 'react-redux';

import directActions from '../../../actions/directs';
import DirectSingle from './DirectSingle';
import { getDirect } from '../../../selectors/direct';
import HideOnArchivedHOC from '../../../HOCs/archive/HideOnArchivedHOC';

const mapStateToProps = (state, ownProps) => ({
  direct: getDirect(state, ownProps.id),
  loading: state.directs.loading,
  error: state.directs.error,
});

export default HideOnArchivedHOC(
  connect(
  mapStateToProps,
  { find: directActions.find })(DirectSingle),
);
