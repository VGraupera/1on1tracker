import React, { Component, PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

class BottomNav extends Component {

  render() {
    const dashboardIcon = <FontIcon className="material-icons">dashboard</FontIcon>;
    const meetingsIcon = <FontIcon className="material-icons">chat</FontIcon>;
    const directsIcon = <FontIcon className="material-icons">people</FontIcon>;
    const followUpsIcon = <FontIcon className="material-icons">assignment</FontIcon>;

    const paths = [/^\/dashboard/i, /^\/directs/i, /^\/meetings/i, /^\/followUps/i];
    let selectedIndex = -1;
    for (let i = 0; i < paths.length; i += 1) {
      if (paths[i].test(window.location.pathname)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex !== -1) {
      return (
        <Paper zDepth={1} style={{ position: 'fixed', bottom: 0, width: '100%' }}>
          <BottomNavigation selectedIndex={selectedIndex}>
            <BottomNavigationItem
              label="Dashboard"
              icon={dashboardIcon}
              onTouchTap={() => this.props.handleNavigate('/dashboard')}
            />
            <BottomNavigationItem
              label="Directs"
              icon={directsIcon}
              onTouchTap={() => this.props.handleNavigate('/directs')}
            />
            <BottomNavigationItem
              label="Meetings"
              icon={meetingsIcon}
              onTouchTap={() => this.props.handleNavigate('/meetings')}
            />
            <BottomNavigationItem
              label="Follow Ups"
              icon={followUpsIcon}
              onTouchTap={() => this.props.handleNavigate('/followUps')}
            />
          </BottomNavigation>
        </Paper>
      );
    }
    return null;
  }
}

BottomNav.propTypes = {
  handleNavigate: PropTypes.func.isRequired,
};

export default BottomNav;
