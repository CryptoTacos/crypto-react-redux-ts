import * as React from 'react';
import { FlattenedCoinData } from '../types';
import { MarketCapListRow } from './MarketCapListRow';
const cryptocurrencies = require('cryptocurrencies');

export interface MarketCapListProps {
  coinData: FlattenedCoinData[];
  handleCoinIconClick?: () => void;
  title: string;
}

export function MarketCapList({ coinData, handleCoinIconClick, title }: MarketCapListProps): JSX.Element {

  const renderCryptoMarketCapListTableHeader = (): JSX.Element => {
    return (
      <div className={'flexrow'}>
        <div className="flexcol-icon">
          <h2 className="item">{''}</h2>
        </div>
        <div className="flexcol">
          <h2 className="item">{'Ticker'}</h2>
        </div>
        <div className="flexcol">
          <h2 className="item">{'Full Name'}</h2>
        </div>
        <div className="flexcol">
          <h2 className="item">{'Total Supply'}</h2>
        </div>
        <div className="flexcol">
          <h2 className="item">{'Current Price'}</h2>
        </div>
        <div className="flexcol">
          <h2 className="item">{'Market Cap'}</h2>
        </div>
      </div>
    );
  };

  const renderCryptoMarketCapList = (): JSX.Element[] => {
    const cryptoRows = coinData.map((coin, index) => {
      return (
        <MarketCapListRow
          coinData={coinData}
          cryptoName={cryptocurrencies[coin.name]}
          cryptoSymbol={coin.name}
          key={coin.name}
          handleCoinIconClick={handleCoinIconClick}
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
