import React from 'react';
import Paper from 'material-ui/Paper';
import {
  Tabs,
  Tab,
} from 'material-ui/Tabs';
import PropTypes from 'prop-types';

import DirectMeetingList from './meetings/DirectMeetingList';
import DirectFollowUpList from './follow-up/DirectFollowUpList';

const propTypes = {
  directId: PropTypes.string.isRequired,
};

/**
 * @function DirectTabs
 * @param {String} directId
 * @returns {XML}
 */
function DirectTabs({ directId }) {
  return (
    <Paper style={{ marginBottom: 10, marginTop: 10, padding: 10 }}>
      <Tabs>
        <Tab label="Meetings" >
          <DirectMeetingList directId={directId} />
        </Tab>
        <Tab label="Follow Ups" >
          <DirectFollowUpList directId={directId} />
        </Tab>
      </Tabs>
    </Paper>
  );
}

DirectTabs.propTypes = propTypes;

export default DirectTabs;
