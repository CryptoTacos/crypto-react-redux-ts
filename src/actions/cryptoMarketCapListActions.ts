
import * as constants from '../constants';
import { CoinDataResponse, FlattenedCoinData, StoreState } from '../types';
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
    coinData: FlattenedCoinData[];
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

const compareCurrentPricesToPrevious = (oldData: FlattenedCoinData[], newData: FlattenedCoinData[]):
    FlattenedCoinData[] => {
    let tickerizedNewData: FlattenedCoinData[] = [];
    for (const oldCoinData of oldData) {
        let matchingNewCoinData: FlattenedCoinData | undefined = newData.find(
            element => element.name === oldCoinData.name);
        if (matchingNewCoinData) {
            matchingNewCoinData.style =
                matchingNewCoinData.USD.PRICE > oldCoinData.USD.PRICE ? 'greenticker' : 'redticker';

            tickerizedNewData.push(matchingNewCoinData);
        }
    }
    return tickerizedNewData;
};

export const getCoinData = (availableCoins: string[]) =>
    async (dispatch: Dispatch<SetCoinData>, getState: () => StoreState) => {
        let sortedPriceArray: FlattenedCoinData[] = [];
        let prices: CoinDataResponse[] = await cryptoCompare.priceFull(availableCoins.slice(0, 59), ['USD', 'EUR']);
        prices = Object.assign(prices, await cryptoCompare.priceFull(
            availableCoins.slice(60, 100), ['USD', 'EUR']));
        prices = Object.assign(prices, await cryptoCompare.priceFull(
            availableCoins.slice(101, 151), ['USD', 'EUR']));
        prices = Object.assign(prices, await cryptoCompare.priceFull(
            availableCoins.slice(152, 202), ['USD', 'EUR']));
        prices = Object.assign(prices, await cryptoCompare.priceFull(
            availableCoins.slice(203, availableCoins.length), ['USD', 'EUR']));

        const keys = Object.keys(prices);

        for (let i = 0; i < keys.length; i++) {
            const coinDataResponse: CoinDataResponse = prices[keys[i]];

            if (coinDataResponse.USD.LASTVOLUME !== 0) {
                sortedPriceArray.push(Object.assign({ name: keys[i], style: '' }, coinDataResponse));
            } else { continue; }
        }

        sortedPriceArray = sortedPriceArray.sort((marketCapA, marketCapB) => {
            return marketCapB.USD.MKTCAP - marketCapA.USD.MKTCAP;
        });

        if (getState().cryptoMarketCapListState.coinData.length > 0) {
            sortedPriceArray = compareCurrentPricesToPrevious(
                getState().cryptoMarketCapListState.coinData, sortedPriceArray);
        }

        dispatch<SetCoinData>({
            type: constants.SET_COIN_DATA,
            coinData: sortedPriceArray
        });
    };
