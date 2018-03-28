import { CoinDashboardState } from '../types';
import { CoinDashboardActions } from '../actions/coinDashboardActions';
import { SET_USER_PINNED_COINS_SUCCESS } from '../constants';

const initialState: CoinDashboardState = {
    pinnedCoins: []
};

const coinDashboardReducer = (state = initialState, action: CoinDashboardActions): CoinDashboardState => {
    switch (action.type) {
        case SET_USER_PINNED_COINS_SUCCESS:
            return {
                ...state,
                pinnedCoins: action.pinnedCoins,
            };

        default:
            return state;
    }
};

export default coinDashboardReducer;