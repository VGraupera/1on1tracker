import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';

import DirectItem from './DirectItem';
import { SORT_WITHOUT_TEAM_NAME } from '../../constants/sort';

/**
 * @description PropTypes for DirectItemDivider
 */
const propTypes = {
  team: PropTypes.string.isRequired,
  directs: PropTypes.array.isRequired,
};

/**
 * @class DirectItemDivider
 * @extends React.Component
 * @description Render component
 */
class DirectItemDivider extends Component {

  state = {
    openList: false,
  };

  handleToggle = () => {
    this.setState(prevState => ({ openList: !prevState.openList }));
  };
  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { team, directs } = this.props;
    return (
      <ListItem
        primaryText={team !== SORT_WITHOUT_TEAM_NAME ? team : 'No Team'}
        open={this.state.openList}
        autoGenerateNestedIndicator={false}
        onTouchTap={this.handleToggle}
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
}

DirectItemDivider.propTypes = propTypes;

export default DirectItemDivider;

