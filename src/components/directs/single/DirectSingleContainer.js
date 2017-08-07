import { connect } from 'react-redux';

import directActions from '../../../actions/directs';
import DirectSingle from './DirectSingle';
import HideOnArchivedHOC from '../../../HOCs/archive/HideOnArchivedHOC';

const mapStateToProps = (state, ownProps) => ({
  direct: state.directs.activeDirect,
  loading: state.directs.loading,
  error: state.directs.error,
  id: ownProps.id,
});

export default HideOnArchivedHOC(
  connect(
  mapStateToProps,
  { find: directActions.find })(DirectSingle),
);
