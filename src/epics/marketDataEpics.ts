import { GET_CURRENT_MARKET_DATA, GET_HISTORICAL_MARKET_DATA } from '../constants';
import {
    CurrentMarketDataAction, fetchCurrentMarketData, SetCurrentMarketData, GetCurrentMarketData, setCurrentMarketData
} from '../actions/currentMarketDataActions';
import { Epic } from 'redux-observable';
import { IStoreState } from '../types';
import { Observable } from 'rxjs';
import {
    HistoricalMarketDataActions, SetHistoricalMarketData,
    GetHistoricalMarketData, fetchHistoricalData, setHistoricalMarketData
} from '../actions/historicalMarketDataActions';

/**
 * Fetch the latest market data
 * @param action$
 * @param state$
 */
const fetchLatestMarketDataEpic: Epic<CurrentMarketDataAction, IStoreState> =
    (action$, state$): Observable<SetCurrentMarketData> => {
        return action$
            .ofType<GetCurrentMarketData>(GET_CURRENT_MARKET_DATA)
            .mergeMap(() =>
                Observable.interval(600000)
                    .mergeMap(() =>
                        Observable.from(fetchCurrentMarketData(state$.getState().coinDashboard.pinnedCoins))
                            // tslint:disable-next-line:no-any
                            .map<any, any>(setCurrentMarketData)
                    )
            );
    };

/**
 * Fetch historical market data
 * @param action$
 */
const fetchHistoricalMarketDataEpic: Epic<HistoricalMarketDataActions, IStoreState> =
    (action$, state$): Observable<SetHistoricalMarketData> =>
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
