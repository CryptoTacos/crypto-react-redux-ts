import { HistoricalCoinData, FlattenedCoinData, ChatState } from '.';

interface StoreState {
    marketData: MarketDataState;
    coinDashboard: CoinDashboardState;
    chatState: ChatState;
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