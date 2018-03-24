import { FlattenedCoinData, CoinDataResponse } from '../types';
import { SET_CURRENT_MARKET_DATA, GET_CURRENT_MARKET_DATA } from '../constants';
import { getAvailableCoins } from '../util/utils';
const cryptoCompare = require('cryptocompare');

export interface GetCurrentMarketData {
    type: GET_CURRENT_MARKET_DATA;
}

export interface SetCurrentMarketData {
    type: SET_CURRENT_MARKET_DATA;
    currentMarketData: FlattenedCoinData[];
}

export type CurrentMarketDataAction = SetCurrentMarketData | GetCurrentMarketData;

export const getCurrentMarketData = () => ({
    type: GET_CURRENT_MARKET_DATA
});

export const setCurrentMarketData = (currentMarketData: FlattenedCoinData[]) => ({
    type: SET_CURRENT_MARKET_DATA,
    currentMarketData
});

export async function fetchCurrentMarketData(coins?: string[], context?: string[]): Promise<FlattenedCoinData[]> {
    let sortedPriceArray: FlattenedCoinData[] = [];
    coins = coins ? coins : getAvailableCoins();
    context = context ? context : ['USD'];

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
