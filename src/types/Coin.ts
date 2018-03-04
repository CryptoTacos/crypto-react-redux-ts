
interface FiatPrice {
    EUR?: number;
    USD?: number;
    JPY?: number;
    GDP?: number;
}

interface CryptoCurrencyPrice {
    BTC?: number;
    ETH?: number;
    XRP?: number;
    LTC?: number;
    USDT?: number;
}

interface CoinFinancial {
    marketCap: number;
    price: FiatPrice;

}

interface Exchange {
    name: string;
    website?: string;
}

interface Coin extends CoinFinancial {
    name: string;
    symbol: string;
    website?: string;
    exchanges: Exchange[];
}