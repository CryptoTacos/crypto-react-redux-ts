import { combineReducers } from 'redux';
import cryptoMarketCapList from './cryptoMarketCapList';
import { StoreState } from '../types';

// tslint:disable-next-line:no-any
export default combineReducers<StoreState>({
    cryptoMarketCapListState: cryptoMarketCapList,
});