import { HistoricalCoinData, FlattenedCoinData, IChatState, IMessage } from '.';

interface IStoreState {
    marketData: MarketDataState;
    coinDashboard: CoinDashboardState;
    chatState: IChatState<IMessage>;
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
    IStoreState,
    MenuBarState,
    CryptoMarketCapListState,
    MarketDataState,
    CoinDashboardState
};