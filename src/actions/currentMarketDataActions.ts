import { FlattenedCoinData, CoinDataResponse } from '../types';
import { SET_CURRENT_MARKET_DATA } from '../constants';
import { Dispatch } from 'redux';
const cryptoCompare = require('cryptocompare');

interface SetCurrentMarketData {
    type: SET_CURRENT_MARKET_DATA;
    currentMarketData: FlattenedCoinData[];
}

export type CurrentMarketDataAction = SetCurrentMarketData;

const getCurrentMarketData = (currentMarketData: FlattenedCoinData[]) => ({
    type: SET_CURRENT_MARKET_DATA, currentMarketData
});

export const updateCurrentMarketData = (coins: string[], context: string[]) =>
    async (dispatch: Dispatch<CurrentMarketDataAction>): Promise<void> => {
        dispatch(getCurrentMarketData(await fetchCurrentMarketData(coins, context)));
    };

export async function fetchCurrentMarketData(coins: string[], context: string[]): Promise<FlattenedCoinData[]> {
    let sortedPriceArray: FlattenedCoinData[] = [];

    // Here we have to split up the api call because they throttle us
    let prices: CoinDataResponse[] = await cryptoCompare.priceFull(coins.slice(0, 59), context);
    prices = Object.assign(prices, await cryptoCompare.priceFull(coins.slice(60, 100), context));
    prices = Object.assign(prices, await cryptoCompare.priceFull(coins.slice(101, 151), context));
    prices = Object.assign(prices, await cryptoCompare.priceFull(coins.slice(152, 202), context));
    // prices = Object.assign(prices, await cryptoCompare.priceFull(coins.slice(203, coins.length), context));

    const keys = Object.keys(prices);

    for (let i = 0; i < keys.length; i++) {
        const coinDataResponse: CoinDataResponse = prices[keys[i]];

        if (coinDataResponse.USD.LASTVOLUME !== 0) {
            sortedPriceArray.push(Object.assign({ name: keys[i], style: 'nochangeticker' }, coinDataResponse));
        } else { continue; }
    }

    sortedPriceArray = sortedPriceArray.sort((marketCapA, marketCapB) => {
        return marketCapB.USD.MKTCAP - marketCapA.USD.MKTCAP;
    });

    return sortedPriceArray;
}

/*
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
*/

/*
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
*/