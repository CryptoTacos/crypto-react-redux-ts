import * as constants from '../constants';

export interface SelectCoinIcon {
    type: constants.SELECT_COIN_ICON;
}

export type CryptoMarketCapListRowAction = SelectCoinIcon;

export const selectCoinIcon = (): SelectCoinIcon => ({
    type: constants.SELECT_COIN_ICON
});