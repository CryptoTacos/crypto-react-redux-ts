import { combineReducers } from 'redux';
import marketDataReducer from './marketDataReducer';
import coinDashboardReducer from './coinDashboardReducer';
import { StoreState } from '../types';

// tslint:disable-next-line:no-any
export default combineReducers<StoreState>({
    marketData: marketDataReducer,
    coinDashboard: coinDashboardReducer,
});