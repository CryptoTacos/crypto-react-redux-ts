
import * as constants from '../constants';
import { CoinData } from '../types';
import { Dispatch } from 'redux';
const cryptoCompare = require('cryptocompare');
export interface SelectCoinIcon {
    type: constants.SELECT_COIN_ICON;
}

export interface FilterListAlphabetically {
    type: constants.FILTER_LIST_ALPHABETICALLY;
}

export interface SetCoinData {
    type: constants.SET_COIN_DATA;
    coinData: CoinData[];
}

export interface SetAvailableCoinList {
    type: constants.SET_AVAILABLE_COIN_LIST;
    coinList: string[];
}

export type CryptoMarketCapListAction = SelectCoinIcon | FilterListAlphabetically | SetCoinData | SetAvailableCoinList;

export const selectCoinIcon = (): SelectCoinIcon => ({
    type: constants.SELECT_COIN_ICON
});

export const filterListAlphabetically = () => ({
    type: constants.FILTER_LIST_ALPHABETICALLY
});

const getAvailableCoinList = (): string[] => {
    let availableCoins: string[] = [];
    const cryptocurrencies = require('cryptocurrencies');
    for (const coin of cryptocurrencies.symbols()) {
        try {
            require('../icons/coins/color/' + coin.toLowerCase() + '.svg');
            availableCoins.push(coin);
        } catch (error) {
            continue;
        }
    }
    return availableCoins;
};

export const setAvailableCoinData = () => ({
    type: constants.SET_AVAILABLE_COIN_LIST, coinList: getAvailableCoinList()
});

const getTheData = () => cryptoCompare.coinList();

export const getCoinData = () =>
    async (dispatch: Dispatch<SetCoinData>) => {
        const coinData = await getTheData();
        dispatch({ type: constants.SET_COIN_DATA, coinData: coinData.Data });
    };
