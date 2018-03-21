
import { MarketDataState } from '../types/index';
import { MarketDataActions } from '../actions/marketDataActions';
import { SET_HISTORICAL_MARKET_DATA } from '../constants';

const initialState: MarketDataState = {
    coinData: [],
    historicalMarketData: [],
};

const marketDataReducer = (state = initialState, action: MarketDataActions):
    MarketDataState => {
    switch (action.type) {
        case SET_HISTORICAL_MARKET_DATA:
            return {
                ...state,
                historicalMarketData: action.historicalMarketData,
            };
        default:
            return state;
    }
};

export default marketDataReducer;