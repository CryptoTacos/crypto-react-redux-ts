import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './scss/index.scss';
import './scss/App.scss';
import App from './components/App';
import store from './store';
import { getCoinData, setAvailableCoinData } from './actions/cryptoMarketCapListActions';
import { StoreState } from './types';

store.dispatch(setAvailableCoinData());

const fetchLatestMarketData = () => {
  store.dispatch(getCoinData((store.getState() as StoreState).cryptoMarketCapListState.cryptos));
};

setInterval(fetchLatestMarketData, 10000);

fetchLatestMarketData();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
