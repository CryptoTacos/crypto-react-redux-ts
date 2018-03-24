import {
    HistoricalCoinData, HistoricalCoinDataForCandlestickChart,
    CryptoCompareHistoricalCoinData,
} from '../types';
import { SET_HISTORICAL_MARKET_DATA, GET_HISTORICAL_MARKET_DATA } from '../constants';
import { getAvailableCoins } from '../util/utils';
const cryptoCompare = require('cryptocompare');

export const enum HistoricalDataType {
    MINUTELY,
    DAILY,
    HOURLY,
}

export interface GetHistoricalMarketData {
    type: GET_HISTORICAL_MARKET_DATA;
    payload: HistoricalDataType;
}

export interface SetHistoricalMarketData {
    type: SET_HISTORICAL_MARKET_DATA;
    historicalMarketData: HistoricalCoinData[];
}

export type HistoricalMarketDataActions = SetHistoricalMarketData | GetHistoricalMarketData;

export const getHistoricalMarketData = (dataBy: HistoricalDataType): GetHistoricalMarketData => ({
    type: GET_HISTORICAL_MARKET_DATA,
    payload: dataBy
});

export const setHistoricalMarketData = (historicalMarketData: HistoricalCoinData[]):
    SetHistoricalMarketData => ({
        type: SET_HISTORICAL_MARKET_DATA,
        historicalMarketData: historicalMarketData
    });

function parseHistoricalData(historicalCoinData: CryptoCompareHistoricalCoinData[], coinName: string):
    HistoricalCoinData {
    const historicalDataList: HistoricalCoinDataForCandlestickChart[] = [];
    for (const data of historicalCoinData) {
        const objectForContinuseCandleStickChart: HistoricalCoinDataForCandlestickChart = {
            date: new Date(data.time * 1000),
            open: data.open,
            high: data.high,
            low: data.low,
            close: data.close,
            volume: data.volumeto,
        };

        historicalDataList.push(objectForContinuseCandleStickChart);
    }
    return {
        coinName: coinName,
        historicalCoinData: historicalDataList,
    };
}

export async function fetchHistoricalData(dataBy: HistoricalDataType, currencyContext?: string)
    : Promise<HistoricalCoinData[]> {
    console.log('we made it');
    const historicalCoinData: HistoricalCoinData[] = [];
    let fetchHistoricalMarketData: (coin: string, context: string) => Promise<HistoricalCoinData>;
    switch (dataBy) {
        case HistoricalDataType.DAILY:
            fetchHistoricalMarketData = getHistoricalMarketDataByDay;
            break;
        case HistoricalDataType.HOURLY:
            fetchHistoricalMarketData = getHistoricalMarketDataByHour;
            break;
        case HistoricalDataType.MINUTELY:
            fetchHistoricalMarketData = getHistoricalMarketDataByMinute;
            break;
        default:
            fetchHistoricalMarketData = getHistoricalMarketDataByDay;
    }

    for (const coin of getAvailableCoins()) {
        try {
            historicalCoinData.push(await fetchHistoricalMarketData(coin, currencyContext ? currencyContext : 'USD'));
        } catch (error) {
            continue;
        }
    }

    return historicalCoinData;
}

export async function getHistoricalMarketDataByDay(coin: string, context: string):
    Promise<HistoricalCoinData> {
    return parseHistoricalData(await cryptoCompare.histoDay(coin.toUpperCase(), context.toUpperCase()), coin);
}

export async function getHistoricalMarketDataByHour(coin: string, context: string):
    Promise<HistoricalCoinData> {
    return parseHistoricalData(await cryptoCompare.histoHour(coin.toUpperCase(), context.toUpperCase()), coin);
}

export async function getHistoricalMarketDataByMinute(coin: string, context: string):
    Promise<HistoricalCoinData> {
    return parseHistoricalData(await cryptoCompare.histoMinute(coin.toUpperCase(), context.toUpperCase()), coin);
}
