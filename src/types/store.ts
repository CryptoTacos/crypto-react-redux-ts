import { HistoricalCoinData, FlattenedCoinData } from '.';

interface StoreState {
    marketData: MarketDataState;
    coinDashboard: CoinDashboardState;
}

interface MenuBarState {
    title: string;
}

interface CryptoMarketCapListState {
    cryptos: string[];
    title: string;
    coinData: FlattenedCoinData[];
    currencyContext: string;
}

interface MarketDataState {
    historicalMarketData: HistoricalCoinData[];
    currentMarketData: FlattenedCoinData[];
}

interface CoinDashboardState {
    pinnedCoins: string[];
}

export {
    StoreState,
    MenuBarState,
    CryptoMarketCapListState,
    MarketDataState,
    CoinDashboardState
};