import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

class BottomNav extends Component {

  render() {
    const meetingsIcon = <FontIcon className="material-icons">chat</FontIcon>;
    const directsIcon = <FontIcon className="material-icons">people</FontIcon>;

    const reDirects = new RegExp('^/directs', 'i');
    const isDirectsPath = reDirects.test(window.location.pathname);
    const reMeetings = new RegExp('^/meetings', 'i');
    const isMeetingsPath = reMeetings.test(window.location.pathname);

    if (isDirectsPath || isMeetingsPath) {
      const selectedIndex = isDirectsPath ? 0 : 1;
      return (
        <Paper zDepth={1} style={{ position: 'fixed', bottom: 0, width: '100%' }}>
          <BottomNavigation selectedIndex={selectedIndex}>
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
          </BottomNavigation>
        </Paper>
      );
    }
    return null;
  }
}

export default BottomNav;
