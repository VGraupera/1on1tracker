import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { requireAuth } from './actions/auth';

import App from './components/App';
import MeetingShow from './components/meetings/MeetingShow';
import MeetingList from './components/meetings/MeetingList';
import MeetingNew from './components/meetings/MeetingNew';
import MeetingEdit from './components/meetings/MeetingEdit';
import DirectShow from './components/directs/DirectShow';
import DirectHome from './components/directs/DirectHome';
import DirectNew from './components/directs/DirectNew';
import DirectEdit from './components/directs/DirectEdit';
import FollowUpShow from './components/followUps/FollowUpShow';
import FollowUpList from './components/followUps/FollowUpList';
import FollowUpNew from './components/followUps/FollowUpNew';
import FollowUpEdit from './components/followUps/FollowUpEdit';

import TeamContainer from './components/teams/TeamContainer';
import TeamFormContainer from './components/teams/TeamFormContainer';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Account from './components/Account';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

import NotFound from './components/404';

import SetTextHOC from './HOCs/SetTextHOC';

export default function Routes(store) {
  const checkAuth = (nextState, replace) => {
    store.dispatch(requireAuth(nextState, replace));
  };

  return (
    <Route path="/" component={App}>
      <IndexRoute component={SetTextHOC(Home, '1on1 Tracker')} />
      <Route path="about" component={SetTextHOC(About, 'About')} />
      <Route path="account" component={SetTextHOC(Account, 'My Account')} />
      <Route path="dashboard" component={SetTextHOC(Dashboard, '1on1 Tracker')} />
      <Route path="terms" component={Terms} />
      <Route path="privacy" component={Privacy} />
      <Route path="directs" onEnter={checkAuth}>
        <IndexRoute component={SetTextHOC(DirectHome, 'Directs')} />
        <Route path="archived" component={SetTextHOC(DirectHome, 'Archived Directs')} />
        <Route path="new" component={SetTextHOC(DirectNew, 'New Direct')} />
        <Route path=":id/edit" component={SetTextHOC(DirectEdit, 'Edit Direct')} />
        <Route path=":id/meetings/new" component={SetTextHOC(MeetingNew, 'New Meeting')} />
        <Route path=":id/meetings/:meetingId/followUps/new" component={SetTextHOC(FollowUpNew, 'New Follow Up')} />
        <Route path=":id/followUps/new" component={SetTextHOC(FollowUpNew, 'New Follow Up')} />
        <Route path=":id" component={SetTextHOC(DirectShow, 'Direct')} />
      </Route>
      <Route path="meetings" onEnter={checkAuth}>
        <IndexRoute component={SetTextHOC(MeetingList, 'Meetings')} />
        <Route path="new" component={MeetingNew} />
        <Route path=":id/edit" component={SetTextHOC(MeetingEdit, 'Edit Meeting')} />
        <Route path=":id" component={SetTextHOC(MeetingShow, 'Meeting')} />
      </Route>
      <Route path="followUps" onEnter={checkAuth}>
        <IndexRoute component={SetTextHOC(FollowUpList, 'Follow Ups')} />
        <Route path="new" component={SetTextHOC(FollowUpNew, 'New Follow Up')} />
        <Route path=":id/edit" component={SetTextHOC(FollowUpEdit, 'Edit Follow Up')} />
        <Route path=":id" component={SetTextHOC(FollowUpShow, 'Follow Up')} />
      </Route>
      <Route path="teams" onEnter={checkAuth}>
        <IndexRoute components={SetTextHOC(TeamContainer, 'Teams')} />
        <Route path="new" component={SetTextHOC(TeamFormContainer, 'New Team')} />
        <Route path="edit/:id" component={SetTextHOC(TeamFormContainer, 'Edit Team')} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  );
}
