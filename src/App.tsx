import * as React from 'react';
import './Scss/App.scss';
import CryptoMarketCapList from './components/CryptoMarketCapList';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
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
        <h2>Crypto Market Cap List</h2>
        <CryptoMarketCapList/>
      </div>

      </div>
    );
  }
}

export default App;
