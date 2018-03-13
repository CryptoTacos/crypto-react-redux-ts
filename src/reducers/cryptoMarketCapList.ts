import {
    SET_COIN_DATA, SET_AVAILABLE_COIN_LIST, SELECT_SORT_BY_MARKET_CAP,
    SELECT_SORT_BY_PRICE, SELECT_SORT_BY_NAME, CHANGE_MARKET_LIST_CURRENCY
} from '../constants';
import { CryptoMarketCapListAction } from '../actions/cryptoMarketCapListActions';
import { MarketCapMenuBarAction } from '../actions/marketCapButtonRowActions';
import { CryptoMarketCapListState } from '../types';
const cryptocurrencies = require('cryptocurrencies');

const initialState: CryptoMarketCapListState = {
    cryptos: cryptocurrencies.symbols(),
    coinData: [],
    currencyContext: 'USD',
    title: 'Title',
};

const cryptoMarketCapList = (state = initialState, action: CryptoMarketCapListAction | MarketCapMenuBarAction):
    CryptoMarketCapListState => {
    switch (action.type) {

        case SET_COIN_DATA:
            return {
                ...state,
                coinData: action.coinData
            };

        case SET_AVAILABLE_COIN_LIST:
            return {
                ...state,
                cryptos: action.coinList
            };

        case SELECT_SORT_BY_MARKET_CAP:
            return {
                ...state,
                coinData: action.sortedList
            };

        case SELECT_SORT_BY_NAME:
            return {
                ...state,
                coinData: action.sortedList
            };

        case SELECT_SORT_BY_PRICE:
            return {
                ...state,
                coinData: action.sortedList
            };

        case CHANGE_MARKET_LIST_CURRENCY:
            return {
                ...state,
                currencyContext: action.currency
            };

        default:
            return state;
    }
};

export default cryptoMarketCapList;