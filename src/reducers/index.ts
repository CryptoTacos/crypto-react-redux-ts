import { combineReducers } from 'redux';
import marketDataReducer from './marketDataReducer';
import coinDashboardReducer from './coinDashboardReducer';
import { IStoreState } from '../types';
import chatStateReducer from './chatState';

// tslint:disable-next-line:no-any
export default combineReducers<IStoreState>({
    marketData: marketDataReducer,
    coinDashboard: coinDashboardReducer,
    chatState: chatStateReducer,
});