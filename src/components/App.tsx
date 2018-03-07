import * as React from 'react';
import './Scss/App.scss';
// import 'font-awesome';
// import 'cryptocoins-icons';
import MarketCapList from '..//containers/MarketCapList';
const logo = require('../icons/logo.svg');
const btc = require('./icons/coins/color/btc.svg');

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
    </p>
      </div>

      <div>
        <img src={btc} />
        <h2>Crypto Market Cap List</h2>
        <MarketCapList />
      </div>

    </div>
  );
}

export default App;
