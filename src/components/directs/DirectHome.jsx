import React from 'react';

import AddNewDirectBtn from './list/AddNewDirectBtn';
import DirectListContainer from './list/DirectListContainer';
import DirectArchivedListContainer from './list/DirectArchivedListContainer';
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
      <DirectArchivedListContainer />
      <ArchivedDirectCount />
      <AddNewDirectBtn />
    </div>
  );
}

export default DirectHome;

