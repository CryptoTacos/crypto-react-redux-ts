import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import './scss/App.scss';
import App from './components/App';
import { getCoinData, setAvailableCoinData } from './actions/cryptoMarketCapListActions';
import { StoreState, HistoricalCoinData } from './types';
import { BrowserRouter as Router, } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import configureStore from './store';
import { getHistoricalMarketDataByDay, setHistoricalMarketData } from './actions/marketDataActions';

const store = configureStore();
store.dispatch(setAvailableCoinData());
const fetchLatestMarketData = () => {
  store.dispatch(getCoinData((store.getState() as StoreState).cryptoMarketCapListState.cryptos));
};

const fetchLatestHistoricalMarketData = async () => {
  const dataList: HistoricalCoinData[] = [];
  for (const coin of store.getState().cryptoMarketCapListState.cryptos) {
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
setInterval(fetchLatestMarketData, 10000);

fetchLatestMarketData();

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
