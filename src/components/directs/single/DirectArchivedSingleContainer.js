import { connect } from 'react-redux';

import { archivedDirects as archivedDirectsActions } from '../../../actions/directs';
import { getArchivedDirect } from '../../../selectors/archivedDirects';
import DirectSingle from './DirectSingle';
import ShowOnArchivedHOC from '../../../HOCs/archive/ShowOnArchivedHOC';

const mapStateToProps = (state, ownProps) => ({
  direct: getArchivedDirect(state,ownProps.id),
  loading: state.archivedDirects.loading,
  error: state.archivedDirects.error,
});

export default ShowOnArchivedHOC(
  connect(
  mapStateToProps,
  { find: archivedDirectsActions.find })(DirectSingle),
);
