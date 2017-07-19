import React from 'react';

import AddNewDirectBtn from './AddNewDirectBtn';
import DirectListContainer from './list/DirectListContainer';
import ArchivedDirectCount from './list/ArchivedDirectCount';

/**
 * @function DirectHome
 * @returns {XML}
 * @constructor
 */
function DirectHome() {
  return (
    <div className="container directs">
      <DirectListContainer />
      <ArchivedDirectCount />
      <AddNewDirectBtn />
    </div>
  );
}

export default DirectHome;

