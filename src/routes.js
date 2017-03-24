import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { requireAuth } from './actions/auth';

import App from './components/App';
import MeetingShow from './components/meetings/MeetingShow';
import MeetingList from './components/meetings/MeetingList';
import MeetingNew from './components/meetings/MeetingNew';
import MeetingEdit from './components/meetings/MeetingEdit';
import DirectShow from './components/directs/DirectShow';
import DirectList from './components/directs/DirectList';
import DirectNew from './components/directs/DirectNew';
import DirectEdit from './components/directs/DirectEdit';
import FollowUpShow from './components/followUps/FollowUpShow';
import FollowUpList from './components/followUps/FollowUpList';
import FollowUpNew from './components/followUps/FollowUpNew';
import FollowUpEdit from './components/followUps/FollowUpEdit';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

import NotFound from './components/404';

export default function Routes(store) {
  const checkAuth = (nextState, replace) => {
    store.dispatch(requireAuth(nextState, replace));
  };

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="terms" component={Terms} />
      <Route path="privacy" component={Privacy} />
      <Route path="directs" onEnter={checkAuth}>
        <IndexRoute component={DirectList} />
        <Route path="new" component={DirectNew} />
        <Route path=":id/edit" component={DirectEdit} />
        <Route path=":id/meetings/new" component={MeetingNew} />
        <Route path=":id/meetings/:meetingId/followUps/new" component={FollowUpNew} />
        <Route path=":id/followUps/new" component={FollowUpNew} />
        <Route path=":id" component={DirectShow} />
      </Route>
      <Route path="meetings" onEnter={checkAuth}>
        <IndexRoute component={MeetingList} />
        <Route path="new" component={MeetingNew} />
        <Route path=":id/edit" component={MeetingEdit} />
        <Route path=":id" component={MeetingShow} />
      </Route>
      <Route path="followUps" onEnter={checkAuth}>
        <IndexRoute component={FollowUpList} />
        <Route path="new" component={FollowUpNew} />
        <Route path=":id/edit" component={FollowUpEdit} />
        <Route path=":id" component={FollowUpShow} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  );
}
