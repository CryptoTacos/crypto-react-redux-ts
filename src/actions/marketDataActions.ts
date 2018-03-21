import { HistoricalCoinData, HistoricalCoinDataForContinuousCandlestickChart } from '../types';

const cryptoCompare = require('cryptocompare');

function parseHistoricalData(historicalCoinData: HistoricalCoinData[]):
    HistoricalCoinDataForContinuousCandlestickChart[] {
    const dataList: HistoricalCoinDataForContinuousCandlestickChart[] = [];

    for (const data of historicalCoinData) {
        const objectForContinuseCandleStickChart: HistoricalCoinDataForContinuousCandlestickChart = {
            date: new Date(data.time),
            open: data.open,
            high: data.high,
            low: data.low,
            close: data.close,
            volume: data.volumeto,
        };
        dataList.push(objectForContinuseCandleStickChart);
    }
    return dataList;
}

export async function getHistoricalMarketData(): Promise<HistoricalCoinDataForContinuousCandlestickChart[]> {
    return await parseHistoricalData(cryptoCompare.histoMinute('BTC', 'USD'));
}