import React from 'react';
import { ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';

import DirectItem from './DirectItem';
import { SORT_WITHOUT_TEAM_NAME } from '../../../../constants/general';

/**
 * @description PropTypes for DirectItemDivider
 */
const propTypes = {
  team: PropTypes.string.isRequired,
  directs: PropTypes.array.isRequired,
};

/**
 * @function DirectItemDivider
 * @param props
 * @returns {XML}
 * @constructor
 */
function DirectItemDivider(props) {
  const { team, directs } = props;
  return (
    <ListItem
      primaryText={team !== SORT_WITHOUT_TEAM_NAME ? team : 'No Team'}
      disabled={true}
      initiallyOpen={true}
      primaryTogglesNestedList={false}
      autoGenerateNestedIndicator={false}
      nestedItems={directs.map((direct) => {
        return (<DirectItem
          key={direct.id}
          direct={{ ...direct, ...{ teamName: SORT_WITHOUT_TEAM_NAME } }}
          id={direct.id}
        />);
      })}
    />
  );
}

DirectItemDivider.propTypes = propTypes;

export default DirectItemDivider;

