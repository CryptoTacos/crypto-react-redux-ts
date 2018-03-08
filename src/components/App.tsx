import * as React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import '../Scss/App.scss';
import MarketCapList from '../containers/MarketCapList';
import MarketCapButtonRow from './MarketCapButtonRow';
// const logo = require('../icons/logo.svg');
const btc = require('../icons/coins/color/btc.svg');

function App() {
  return (
    <div>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <AppBar title="Crypto App" />
      </MuiThemeProvider>
      <div>
        <img src={btc} />
        <MarketCapButtonRow />
        <h2>Crypto Market Cap List</h2>
        <MarketCapList />
      </div>
    </div>
  );
}

export default App;