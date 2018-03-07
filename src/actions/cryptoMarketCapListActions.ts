
import * as constants from '../constants';

export interface SelectCoinIcon {
    type: constants.SELECT_COIN_ICON;
}

export interface FilterListAlphabetically {
    type: constants.FILTER_LIST_ALPHABETICALLY;
}

export type CryptoMarketCapListAction = SelectCoinIcon | FilterListAlphabetically;

export const selectCoinIcon = (): SelectCoinIcon => ({
    type: constants.SELECT_COIN_ICON
});

export const filterListAlphabetically = () => ({
    type: constants.FILTER_LIST_ALPHABETICALLY
});