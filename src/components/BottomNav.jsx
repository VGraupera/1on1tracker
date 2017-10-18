import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Footer from './Footer';

/**
 * @description propTypes for BottomNav
 * @type {Object}
 */
const propTypes = {
  handleNavigate: PropTypes.func.isRequired,
};

/**
 * @function BottomNav
 * @param {Function} handleNavigate
 * @returns {XML}
 */
function BottomNav({ handleNavigate }) {
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
      <Paper zDepth={1} style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 10 }}>
        <BottomNavigation selectedIndex={selectedIndex}>
          <BottomNavigationItem
            label="Dashboard"
            icon={dashboardIcon}
            onTouchTap={() => handleNavigate('/dashboard')}
          />
          <BottomNavigationItem
            label="Directs"
            icon={directsIcon}
            onTouchTap={() => handleNavigate('/directs')}
          />
          <BottomNavigationItem
            label="Meetings"
            icon={meetingsIcon}
            onTouchTap={() => handleNavigate('/meetings')}
          />
          <BottomNavigationItem
            label="Follow Ups"
            icon={followUpsIcon}
            onTouchTap={() => handleNavigate('/followUps')}
          />
        </BottomNavigation>
      </Paper>
    );
  }
  return <Footer />;
}

BottomNav.propTypes = propTypes;

export default BottomNav;

