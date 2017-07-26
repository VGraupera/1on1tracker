import { connect } from 'react-redux';

import directActions from '../../../actions/directs';
import DirectSingle from './DirectSingle';
import OnArchivedHOC from '../../../HOCs/OnArchivedHOC';

const mapStateToProps = (state, ownProps) => ({
  direct: state.directs.activeDirect,
  loading: state.directs.loading,
  error: state.directs.error,
  id: ownProps.id,
});

export default OnArchivedHOC()(
  connect(
  mapStateToProps,
  { find: directActions.find })(DirectSingle),
);
