import * as constants from '../constants';

export interface SelectLoginButton {
    type: constants.SELECT_MENU_BAR_LOGIN;
}

export type MenuBarAction = SelectLoginButton;

export function selectLoginButton(): SelectLoginButton {
    return {
        type: constants.SELECT_MENU_BAR_LOGIN
    };
}