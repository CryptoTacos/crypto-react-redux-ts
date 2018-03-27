import { combineEpics } from 'redux-observable';
import { fetchLatestMarketDataEpic, fetchHistoricalMarketDataEpic } from './marketDataEpics';

/*
type rootEpicTypes = typeof fetchLatestMarketDataEpic
    | typeof fetchHistoricalMarketDataEpic;

*/

// Avoid type safety here as they have not made
// combine epics typesafe yet

// tslint:disable-next-line:no-any
const rootEpic = combineEpics<any>(
    fetchLatestMarketDataEpic,
    fetchHistoricalMarketDataEpic,

);

export {
    fetchLatestMarketDataEpic,
    fetchHistoricalMarketDataEpic,
    rootEpic,
};