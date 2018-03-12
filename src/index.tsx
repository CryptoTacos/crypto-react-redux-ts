import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import './scss/index.scss';
import './scss/App.scss';
import App from './components/App';
import store from './store';
import { getCoinData, setAvailableCoinData } from './actions/cryptoMarketCapListActions';
import { StoreState } from './types';
import { BrowserRouter as Router, } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

store.dispatch(setAvailableCoinData());

const fetchLatestMarketData = () => {
  store.dispatch(getCoinData((store.getState() as StoreState).cryptoMarketCapListState.cryptos));
};

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
