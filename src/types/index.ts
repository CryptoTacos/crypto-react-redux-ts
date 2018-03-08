
export interface StoreState {
    cryptoMarketCapListState: CryptoMarketCapListState;
    menuBarState: MenuBarState;
}

export interface CoinData {
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

export interface CoinDataResponse {
    USD: CoinData;
    EUR: CoinData;
}

export interface FlattenedCoinData {
    name: string;
    style: string;
    USD: CoinData;
    EUR: CoinData; 
}

export interface CryptoMarketCapListState {
    cryptos: string[];
    title: string;
    coinData: FlattenedCoinData[];
}

export interface MenuBarState {
    title: string;
}
