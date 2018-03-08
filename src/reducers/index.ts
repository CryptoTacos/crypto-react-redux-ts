import { combineReducers } from 'redux';
import cryptoMarketCapList from './cryptoMarketCapList';
import cryptoMenuBar from './cryptoMenuBar';
import { StoreState } from '../types';

// tslint:disable-next-line:no-any
export default combineReducers<StoreState>({
    cryptoMarketCapListState: cryptoMarketCapList,
    cryptoMenuBarState: cryptoMenuBar
});