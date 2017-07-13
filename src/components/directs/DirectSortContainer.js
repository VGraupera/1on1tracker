import { connect } from 'react-redux';

import { setSortBy } from '../../actions/directs';
import DirectSort from './DirectSort';

/**
 * @description Map state to props for DirectSort component
 * @param {Object} state app store
 * @param {Object} ownProps own props
 */
const mapStateToProps = (state, ownProps) => ({
  selected: state.directs.sortBy,
  shouldShow: ownProps.location.pathname === '/directs',
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
