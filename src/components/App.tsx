import * as React from 'react';
import { Route } from 'react-router-dom';
import MarketCapList from '../containers/MarketCapListContainer';
import MarketCapButtonRow from '../containers/MarketCapButtonRow';
import NavBar from './NavBar';
import About from './About';
import '../scss/App.scss';

function App() {
  return (

    <div>
      <NavBar />
      <Route
        exact={true}
        path="/"
        render={() => (
          <div className="market-list">
            <MarketCapButtonRow />
            <h2>Crypto Market Cap List</h2>
            <MarketCapList />
          </div>
        )}
      />
      <Route
        exact={true}
        path="/about"
        render={About}
      />
    </div>
  );
}

export default App;
