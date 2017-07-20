import React from 'react';
import PropTypes from 'prop-types';

import DirectSingleContainer from './DirectSingleContainer';
import DirectArchivedSingleContainer from './DirectArchivedSingleContainer';

/**
 * @description propTypes for DirectShow
 * @type {{id: (*)}}
 */
const propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
/**
 * @function DirectShow
 * @param {Object} props props object passed by route
 * @returns {XML}
 */
function DirectShow(props) {
  const { id } = props.params;
  return (
    <div>
      <DirectSingleContainer id={id} />
      <DirectArchivedSingleContainer id={id} />
    </div>
  );
}

DirectShow.propTypes = propTypes;

export default DirectShow;
