import {
    HistoricalCoinData, HistoricalCoinDataForCandlestickChart,
    CryptoCompareHistoricalCoinData
} from '../types';
import { SET_HISTORICAL_MARKET_DATA } from '../constants/';
const cryptoCompare = require('cryptocompare');

interface SetHistoricalMarketData {
    type: SET_HISTORICAL_MARKET_DATA;
    historicalMarketData: HistoricalCoinData[];
}

export type MarketDataActions = SetHistoricalMarketData;

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