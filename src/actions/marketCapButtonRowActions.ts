import * as constants from '../constants';
import store from '../store';
import { StoreState, FlattenedCoinData } from '../types';

export interface IncludesSortedList {
    sortedList: FlattenedCoinData[];
}

export interface SelectSortByName extends IncludesSortedList {
    type: constants.SELECT_SORT_BY_NAME;
}

export interface SelectSortByPrice extends IncludesSortedList {
    type: constants.SELECT_SORT_BY_PRICE;
}

export interface SelectSortByMarketCap extends IncludesSortedList {
    type: constants.SELECT_SORT_BY_MARKET_CAP;
}

export type MarketCapMenuBarAction = SelectSortByName | SelectSortByPrice | SelectSortByMarketCap;

export const selectSortByMarketCap = (): SelectSortByMarketCap => {
    let sortedPriceArray: FlattenedCoinData[] = [];

    sortedPriceArray = (store.getState() as StoreState).cryptoMarketCapListState
        .coinData.sort((coinA, coinB) => {
            return coinB.USD.MKTCAP - coinA.USD.MKTCAP;
        });

    return {
        type: constants.SELECT_SORT_BY_MARKET_CAP,
        sortedList: Object.create(sortedPriceArray)
    };
};

export const selectSortByName = (): SelectSortByName => {
    let sortedPriceArray: FlattenedCoinData[] = [];

    sortedPriceArray = (store.getState() as StoreState).cryptoMarketCapListState
        .coinData.sort((coinA, coinB) => {
            if (coinA.name < coinB.name) { return -1; }
            if (coinA.name > coinB.name) { return 1; }
            return 0;
        });

    return {
        type: constants.SELECT_SORT_BY_NAME,
        sortedList: Object.create(sortedPriceArray)
    };
};