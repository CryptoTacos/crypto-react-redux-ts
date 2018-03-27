import { combineReducers } from 'redux';
import marketDataReducer from './marketDataReducer';
import { StoreState } from '../types';

// tslint:disable-next-line:no-any
export default combineReducers<StoreState>({
    marketDataReducer: marketDataReducer,
});