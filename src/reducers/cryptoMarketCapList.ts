import {
    SELECT_COIN_ICON, SET_COIN_DATA, SET_AVAILABLE_COIN_LIST
} from '../constants';
import { CryptoMarketCapListAction } from '../actions/cryptoMarketCapListActions';
import { CryptoMarketCapListState } from '../types';
const cryptocurrencies = require('cryptocurrencies');

const initialState: CryptoMarketCapListState = {
    cryptos: cryptocurrencies.symbols(),
    coinData: [],
    title: 'Title',
};

const cryptoMarketCapList = (state = initialState, action: CryptoMarketCapListAction): CryptoMarketCapListState => {
    switch (action.type) {
        case SELECT_COIN_ICON:
            return {
                ...state,
                title: 'HI'
            };

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

        default:
            return state;
    }
};

export default cryptoMarketCapList;