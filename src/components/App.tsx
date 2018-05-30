import * as React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Welcome from './Welcome';
import '../scss/App.scss';

function App() {
  return (
    <div>
      <NavBar />
      <Route
        exact={true}
        path="/"
        component={Welcome}
      />
      <Route
        exact={true}
        path="/about"
        component={About}
      />
      <Route
        exact={true}
        path="/welcome"
        component={Welcome}
      />
    </div>
  );
}

export default App;
