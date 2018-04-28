interface CoinData {
    CHANGE24HOUR: number;
    CHANGEDAY: number;
    CHANGEPCT24HOUR: number;
    CHANGEPCTDAY: number;
    FLAGS: string;
    FROMSYMBOL: string;
    HIGH24HOUR: string;
    HIGHDAY: string;
    LASTMARKET: string;
    LASTTRADEID: number;
    LASTUPDATE: number;
    LASTVOLUME: number;
    LASTVOLUMETO: number;
    LOW24HOUR: string;
    LOWDAY: string;
    MARKET: string;
    MKTCAP: number;
    OPEN24HOUR: string;
    OPENDAY: string;
    PRICE: string;
    SUPPLY: number;
    TOSYMBOL: string;
    TOTALVOLUME24H: number;
    TOTALVOLUME24HTO: number;
    TYPE: string;
    VOLUME24HOUR: number;
    VOLUME24HOURTO: number;
    VOLUMEDAY: number;
    VOLUMEDAYTO: number;
}

interface CoinDataResponse {
    USD: CoinData;
    EUR: CoinData;
}

interface FlattenedCoinData {
    name: string;
    style: string;
    USD: CoinData;
    EUR: CoinData;
}

interface CoinRow {
    coinData: FlattenedCoinData;
    isRowExpanded: boolean;
}

interface HistoricalCoinData {
    coinName: string;
    historicalCoinData: HistoricalCoinDataForCandlestickChart[];
}

interface HistoricalCoinDataForCandlestickChart {
    date: Date;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

interface CryptoCompareHistoricalCoinData {
    close: number;
    high: number;
    low: number;
    open: number;
    time: number;
    volumefrom: number;
    volumeto: number;
}

export {
    CoinData,
    CoinDataResponse,
    FlattenedCoinData,
    CoinRow,
    HistoricalCoinData,
    HistoricalCoinDataForCandlestickChart,
    CryptoCompareHistoricalCoinData
};