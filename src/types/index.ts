
export interface StoreState {
    cryptoMarketCapListState: CryptoMarketCapListState;
}

export interface CoinData {
    Algorithm?: string;
    CoinName?: string;
    FullName?: string;
    FullyPremined?: string;
    Id: string;
    ImageUrl: string;
    ProofType: string;
    TotalCoinSupply: string;
}

export interface CryptoMarketCapListState {
    cryptos: string[];
    title: string;
    coinData: CoinData[];
}

export interface MenuBarState {
    title: string;
}
