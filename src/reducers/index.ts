import { combineReducers } from 'redux';
import cryptoMarketCapList from './cryptoMarketCapList';
import marketDataReducer from './marketDataReducer';
import { StoreState } from '../types';

// tslint:disable-next-line:no-any
export default combineReducers<StoreState>({
    cryptoMarketCapListState: cryptoMarketCapList,
    marketDataReducer: marketDataReducer,
});