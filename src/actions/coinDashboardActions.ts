import { Dispatch } from 'redux';
import { SET_USER_PINNED_COINS_SUCCESS } from '../constants';

interface SetUserPinnedCoinsSuccess {
    type: SET_USER_PINNED_COINS_SUCCESS;
    pinnedCoins: string[];
}

export type CoinDashboardActions = SetUserPinnedCoinsSuccess;

const setUserPinnedCoinsSuccess = (pinnedCoins: string[]): SetUserPinnedCoinsSuccess => ({
    type: SET_USER_PINNED_COINS_SUCCESS,
    pinnedCoins
});

/*
const setUserPinnedCoinsFailure = (error: string) => {
    throw (error);
};
*/

export const getUserPinnedCoins = (userHash: string) =>
    // tslint:disable-next-line:no-any
    async (dispatch: Dispatch<SetUserPinnedCoinsSuccess>): Promise<void> => {
        try {
            dispatch(setUserPinnedCoinsSuccess(await fetchUserPinnedCoins()));
        } catch (error) {
            dispatch(setUserPinnedCoinsSuccess(['BTC', 'ETH', 'XRP', 'LTC', 'TRX']));
            return;
        }
    };

function fetchUserPinnedCoins(): Promise<string[]> {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    const request = new Request('www.google.com/bitcoin', { method: 'GET', headers: headers });
    return new Promise<string[]>((resolve, reject) => {
        fetch(request).then((response) => {
            if (response.status === 200 && response.ok) {
                resolve(response.json());
            } else {
                reject(response);
            }
        });
    });
}
