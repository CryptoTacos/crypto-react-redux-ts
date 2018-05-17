import * as React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Welcome from './Welcome';
import '../scss/App.scss';
import CoinDashboardContainer from '../containers/CoinDashboardContainer';

function App() {
  return (
    <div>
      <NavBar />
      <Route
        exact={true}
        path="/"
        render={() => <CoinDashboardContainer />}
      />
      <Route
        exact={true}
        path="/about"
        render={About}
      />
      <Route
        exact={true}
        path="/welcome"
        render={Welcome}
      />
    </div>
  );
}

export default App;
