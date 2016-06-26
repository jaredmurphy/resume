import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Resume from './components/resume/resume';
import Home from './components/home';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="resume" component={Resume} />
  </Route>
)
