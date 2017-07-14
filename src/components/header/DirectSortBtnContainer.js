import { connect } from 'react-redux';

import { setSortBy } from '../../actions/directs';
import DirectSort from './DirectSortBtn';

/**
 * @description Map state to props for DirectSort component
 * @param {Object} state app store
 */
const mapStateToProps = state => ({
  selected: state.directs.sortBy,
});

/**
 * @description Map dispatch to props for DirectSort component
 * @param {Function} dispatch the redux dispatch function
 */
const mapDispatchToProps = dispatch => ({
  handleChange: (value) => {
    dispatch(setSortBy(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DirectSort);
