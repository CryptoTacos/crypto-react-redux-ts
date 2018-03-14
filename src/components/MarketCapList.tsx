import * as React from 'react';
import { FlattenedCoinData, CoinRow } from '../types';
import MarketCapListRow from './MarketCapListRow';
const cryptocurrencies = require('cryptocurrencies');

export interface MarketCapListProps {
  coinData: FlattenedCoinData[];
  handleCoinIconClick?: () => void;
  title: string;
  currencyContext: string;
}

export function MarketCapList({ coinData, handleCoinIconClick, title, currencyContext }: MarketCapListProps):
  JSX.Element {
  const renderCryptoMarketCapListTableHeader = (): JSX.Element => {
    return (
      <div className={'flex-row'}>
        <div className="flex-col-icon">
          <h2 className="item">{''}</h2>
        </div>
        <div className="flex-col">
          <h2 className="item">{'Ticker'}</h2>
        </div>
        <div className="flex-col">
          <h2 className="item">{'Full Name'}</h2>
        </div>
        <div className="flex-col">
          <h2 className="item">{'Total Supply'}</h2>
        </div>
        <div className="flex-col">
          <h2 className="item">{'Current Price'}</h2>
        </div>
        <div className="flex-col">
          <h2 className="item">{'Market Cap'}</h2>
        </div>
      </div>
    );
  };

  const mapCoinDataToCoinRow = (coins: FlattenedCoinData[]): CoinRow[] =>
    coins.map(coin => Object.assign({ coinData: coin, isRowExpanded: false }));

  const renderCryptoMarketCapList = (): JSX.Element[] => {
    const cryptoRows = coinData.map((coin, index) => {
      const coinRow: CoinRow | undefined =
        mapCoinDataToCoinRow(coinData).find(element => element.coinData.name === coin.name);
      return (
        <MarketCapListRow
          coinRow={coinRow as CoinRow}
          cryptoName={(cryptocurrencies[coin.name] as string)}
          cryptoSymbol={coin.name}
          key={coin.name}
          currencyContext={currencyContext}
        />
      );
    });
    return cryptoRows;
  };

  return (
    <div className="crypto-market-cap-list">
      {renderCryptoMarketCapListTableHeader()}
      {renderCryptoMarketCapList()}
    </div>
  );
}
