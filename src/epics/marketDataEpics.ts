import { GET_CURRENT_MARKET_DATA, GET_HISTORICAL_MARKET_DATA } from '../constants';
import {
    CurrentMarketDataAction, fetchCurrentMarketData, SetCurrentMarketData, GetCurrentMarketData, setCurrentMarketData
} from '../actions/currentMarketDataActions';
import { Epic } from 'redux-observable';
import { StoreState } from '../types';
import { Observable } from 'rxjs';
import {
    HistoricalMarketDataActions, SetHistoricalMarketData,
    GetHistoricalMarketData, fetchHistoricalData, setHistoricalMarketData
} from '../actions/historicalMarketDataActions';

const fetchLatestMarketDataEpic: Epic<CurrentMarketDataAction, StoreState> =
    (action$): Observable<SetCurrentMarketData> =>
        action$
            .ofType<GetCurrentMarketData>(GET_CURRENT_MARKET_DATA)
            .mergeMap(() =>
                Observable.from(fetchCurrentMarketData())
                    // tslint:disable-next-line:no-any
                    .map<any, any>(setCurrentMarketData)
            );

const fetchHistoricalMarketDataEpic: Epic<HistoricalMarketDataActions, StoreState> =
    (action$): Observable<SetHistoricalMarketData> =>
        action$
            .ofType<GetHistoricalMarketData>(GET_HISTORICAL_MARKET_DATA)
            .mergeMap((action: GetHistoricalMarketData) =>
                Observable.from(fetchHistoricalData(action.payload))
                    .map(setHistoricalMarketData)
            );

export {
    fetchLatestMarketDataEpic,
    fetchHistoricalMarketDataEpic
};
