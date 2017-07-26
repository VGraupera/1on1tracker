import { connect } from 'react-redux';

import { archivedDirects as archivedDirectsActions } from '../../../actions/directs';
import DirectSingle from './DirectSingle';
import OnArchivedHOC from '../../../HOCs/OnArchivedHOC';

const mapStateToProps = (state, ownProps) => ({
  direct: state.archivedDirects.activeDirect,
  loading: state.archivedDirects.loading,
  error: state.archivedDirects.error,
  id: ownProps.id,
});

export default OnArchivedHOC(false)(
  connect(
  mapStateToProps,
  { find: archivedDirectsActions.find })(DirectSingle),
);
