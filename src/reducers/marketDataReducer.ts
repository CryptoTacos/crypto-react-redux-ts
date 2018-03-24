
import { MarketDataState } from '../types/index';
import { HistoricalMarketDataActions } from '../actions/historicalMarketDataActions';
import { CurrentMarketDataAction } from '../actions/currentMarketDataActions';
import { SET_HISTORICAL_MARKET_DATA, SET_CURRENT_MARKET_DATA } from '../constants';

const initialState: MarketDataState = {
    currentMarketData: [],
    historicalMarketData: [],
};

// tslint:disable-next-line:max-line-length
const marketDataReducer = (state = initialState, action: HistoricalMarketDataActions | CurrentMarketDataAction): MarketDataState => {
    switch (action.type) {
        case SET_HISTORICAL_MARKET_DATA:
            return {
                ...state,
                historicalMarketData: action.historicalMarketData,
            };
        case SET_CURRENT_MARKET_DATA:
            return {
                ...state,
                currentMarketData: action.currentMarketData
            };
        default:
            return state;
    }
};

export default marketDataReducer;