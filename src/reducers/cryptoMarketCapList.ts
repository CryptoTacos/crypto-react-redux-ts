import {
    SELECT_COIN_ICON,
} from '../constants';
import { CryptoMarketCapListAction } from '../actions/cryptoMarketCapListActions';
import { CryptoMarketCapListState } from '../types';
const cryptocurrencies = require('cryptocurrencies');

const initialState: CryptoMarketCapListState = {
    cryptos: cryptocurrencies.symbols(),
    title: 'Title',
};

const cryptoMarketCapList = (state = initialState, action: CryptoMarketCapListAction): CryptoMarketCapListState => {
    switch (action.type) {
        case SELECT_COIN_ICON:
            console.log('woah there');
            return {
                ...state,
                title: 'HI'
            };
        default:
            return state;
    }
};

export default cryptoMarketCapList;