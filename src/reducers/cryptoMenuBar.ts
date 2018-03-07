
import { MenuBarState } from '../types';
import { MenuBarAction } from '../actions/menuBarActions';

const initialState: MenuBarState = {
    title: 'Welcome to the Crypto App'
};

const cryptoMenuBar = (state = initialState, action: MenuBarAction) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default cryptoMenuBar;