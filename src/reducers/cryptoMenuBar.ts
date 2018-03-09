
import { MenuBarState } from '../types';
import { MarketCapMenuBarAction } from '../actions/marketCapButtonRowActions';

const initialState: MenuBarState = {
    title: 'Welcome to the Crypto App'
};

const cryptoMenuBar = (state = initialState, action: MarketCapMenuBarAction) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default cryptoMenuBar;