
export interface StoreState {
    cryptoMarketCapListState: CryptoMarketCapListState;
}

export interface CryptoMarketCapListState {
    cryptos: string[];
    title: string;
}

export interface MenuBarState {
    title: string;
}