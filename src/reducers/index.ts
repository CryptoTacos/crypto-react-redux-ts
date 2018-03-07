import { combineReducers } from 'redux';
import cryptoMarketCapList from './cryptoMarketCapList';
import cryptoMenuBar from './cryptoMenuBar';

export default combineReducers ({
    cryptoMarketCapListState: cryptoMarketCapList,
    cryptoMenuBarState: cryptoMenuBar
});
