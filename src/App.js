import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import LandingView from './views/LandingView';
import BiographyView from './views/BiographyView';

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
      </Switch>
    </Router>
  );
}

export default App;
