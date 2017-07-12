import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';

/**
 * @description propTypes for TeamList
 * @type {Object}
 */
const propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  })).isRequired,
  setText: PropTypes.func.isRequired,
};

/**
 * @class TeamList
 * @extends React.Component
 * @description Render component
 */
class TeamList extends Component {

  /**
   * @description componentDidMount for TeamList. Sets header text
   */
  componentDidMount() {
    this.props.setText('Teams');
  }

  /**
   * @description Handle onClick team item
   * @param {Number} id team id
   * @return {Function} new route
   */
  handleOnClickItem = (id) => {
    return () => {
      browserHistory.push(`teams/edit/${id}`);
    };
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const buttonStyle = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 76,
      left: 'auto',
      position: 'fixed',
    };
    const { teams } = this.props;
    const teamList = teams.map(team => (
      <ListItem
        key={team.id}
        onTouchTap={this.handleOnClickItem(team.id)}
        primaryText={team.name}
      />
    ));
    const noItems = <ListItem primaryText="No Teams" />;
    const content = teamList.length ? teamList : noItems;

    return (
      <div className="container meetings">
        <List>
          {content}
          <FloatingActionButton
            style={buttonStyle}
            containerElement={<Link to="/teams/new" />}
          >
            <ContentAdd />
          </FloatingActionButton>
        </List>

      </div>);
  }
}

TeamList.propTypes = propTypes;

export default TeamList;
