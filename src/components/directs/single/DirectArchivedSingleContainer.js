import { connect } from 'react-redux';

import { archivedDirects as archivedDirectsActions } from '../../../actions/directs';
import DirectSingle from './DirectSingle';
import ShowOnArchivedHOC from '../../../HOCs/archive/ShowOnArchivedHOC';

const mapStateToProps = (state, ownProps) => ({
  direct: state.archivedDirects.activeDirect,
  loading: state.archivedDirects.loading,
  error: state.archivedDirects.error,
  id: ownProps.id,
});

export default ShowOnArchivedHOC(
  connect(
  mapStateToProps,
  { find: archivedDirectsActions.find })(DirectSingle),
);
