import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Resume from './components/resume/resume';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="resume" component={Resume} />
    <Route path="about" component={About} />
    <Route path="portfolio" component={Portfolio} />
  </Route>
)
