import * as React from 'react';
import { FlattenedCoinData } from '../types';

export interface MarketCapListRowProps {
  coinData: FlattenedCoinData[];
  handleCoinIconClick?: () => void;
  cryptoSymbol: string;
  cryptoName: string;
}

export function MarketCapListRow(props: MarketCapListRowProps): JSX.Element {
  const { cryptoSymbol, cryptoName, coinData, handleCoinIconClick } = props;
  const cryptoIcon = require('../icons/coins/color/' + cryptoSymbol.toLowerCase() + '.svg');

  const renderCoinPriceCol = (coinTicker: string): JSX.Element => {
    const coin: FlattenedCoinData | undefined = coinData.find(element => element.name === coinTicker);
    return (
      <span className={coin ? 'item ' + coin.style : 'item'}>
        {coin ? coin.USD.PRICE : 'Price Not Found'}
      </span>
    );
  };

  const renderCryptoMarketCapIcon = (icon: string): JSX.Element => {
    return (
      <div className="item">
        <img
          className="icon"
          src={icon}
          onClick={handleCoinIconClick}
        />
      </div>
    );
  };

  const renderCryptoMarketCapSymbol = (value: string) => {
    return (
      <span className="item">{value}</span>
    );
  };

  const renderCryptoName = (value: string): JSX.Element => {
    return (
      <span className="item">{value}</span>
    );
  };

  const renderTotalSupply = (coinTicker: string): JSX.Element => {
    const coin: FlattenedCoinData | undefined = coinData.find(element => element.name === coinTicker);
    return (
      <span className="item">
        {coin ? coin.USD.SUPPLY : 'Supply Not Found'}
      </span>
    );
  };

  const renderCryptoMarketCapChange = (coinTicker: string): JSX.Element => {
    const coin: FlattenedCoinData | undefined = coinData.find(element => element.name === coinTicker);
    return (
      <span className="item">
        {coin ? coin.USD.MKTCAP : 'Market Cap Not Found'}
      </span>
    );
  };

  return (
    <div className={'flexrow'} key={cryptoName}>
          <div className="flexcol-icon">
            {renderCryptoMarketCapIcon(cryptoIcon)}
          </div>
          <div className="flexcol">
            {renderCryptoMarketCapSymbol(cryptoSymbol)}
          </div>
          <div className="flexcol">
            {renderCryptoName(cryptoName)}
          </div>
          <div className="flexcol">
            {renderTotalSupply(cryptoSymbol)}
          </div>
          <div className="flexcol">
            {renderCoinPriceCol(cryptoSymbol)}
          </div>
          <div className="flexcol">
            {renderCryptoMarketCapChange(cryptoSymbol)}
          </div>

        </div>
  );
}
