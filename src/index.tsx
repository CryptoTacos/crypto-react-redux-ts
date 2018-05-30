import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import './scss/App.scss';
import App from './components/App';
import { BrowserRouter as Router, } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import configureStore from './store';
import { getCurrentMarketData } from './actions/currentMarketDataActions';
import { getUserPinnedCoins } from './actions/coinDashboardActions';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const store = configureStore();

// This is a temporary check to see if we have an icon for the coin... if not we will not
// consider the data for the coin
const cryptoCurrencies: string[] = require('cryptocurrencies').symbols();
const appCoins: string[] = [];
for (const coin of cryptoCurrencies) {
  try {
    require('./icons/coins/color/' + coin.toLowerCase() + '.svg');
    appCoins.push(coin);
  } catch (error) {
    continue;
  }
}

store.dispatch(getUserPinnedCoins('testhash'));
store.dispatch(getCurrentMarketData());
// store.dispatch(getHistoricalMarketData(HistoricalDataType.HOURLY));

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider
        theme={theme}
      >
        <div>
          <App />
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
