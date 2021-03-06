import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import LandingView from './views/LandingView';
import ContextView from './views/ContextView';
import BiographyView from './views/BiographyView';
import LegacyView from './views/LegacyView';
import ThoughtsView from './views/ThougtsView';
import Bibliografy from './views/Bibliografy';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingView />
        </Route>
        <Route exact path="/biography">
          <BiographyView />
        </Route>
        <Route exact path="/thoughts">
          <ThoughtsView />
        </Route>
        <Route exact path="/context">
          <ContextView />
        </Route>
        <Route exact path="/bibliografía">
          <Bibliografy />
        </Route>
        <Route exact path="/legacy">
          <LegacyView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
