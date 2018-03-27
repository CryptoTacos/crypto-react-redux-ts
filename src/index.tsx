import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import './scss/App.scss';
import App from './components/App';
import { BrowserRouter as Router, } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import configureStore from './store';
import { HistoricalCoinData } from './types';
import { getHistoricalMarketDataByDay, setHistoricalMarketData } from './actions/historicalMarketDataActions';
import { updateCurrentMarketData } from './actions/currentMarketDataActions';

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

const getLatestMarketData = (coins: string[]) => {
  store.dispatch(updateCurrentMarketData(coins, ['USD']));
};

const fetchLatestHistoricalMarketData = async () => {
  const dataList: HistoricalCoinData[] = [];
  for (const coin of appCoins) {
    try {
      dataList.push(await getHistoricalMarketDataByDay(coin, 'USD'));
      store.dispatch(setHistoricalMarketData(dataList));
    } catch (error) {
      console.error(error);
      continue;
    }
  }
};

fetchLatestHistoricalMarketData();

setInterval(getLatestMarketData(appCoins), 10000);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider
        muiTheme={getMuiTheme(lightBaseTheme)}
      >
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
