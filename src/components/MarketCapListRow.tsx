import * as React from 'react';
import { CoinRow } from '../types';

export interface MarketCapListRowProps {
  coinRow: CoinRow;
  cryptoSymbol: string;
  cryptoName: string;
}

export interface MarketCapListRowState {
  isExpanded: boolean;
  cryptoIcon: string;
}

class MarketCapListRow extends React.Component<MarketCapListRowProps, MarketCapListRowState> {

  constructor(props: MarketCapListRowProps) {
    super(props);
    this.state = {
      isExpanded: false,
      cryptoIcon: require('../icons/coins/color/' + this.props.cryptoSymbol.toLowerCase() + '.svg')
    };
  }

  handleCoinIconClick = (): void => {
    console.log('smarty');
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  }

  renderCoinPriceCol(coinTicker: string): JSX.Element {
    return (
      <span className={this.props.coinRow ? 'item ' + this.props.coinRow.coinData.style : 'item'}>
        {this.props.coinRow ? this.props.coinRow.coinData.USD.PRICE : 'Price Not Found'}
      </span>
    );
  }

  renderCryptoMarketCapIcon(icon: string): JSX.Element {
    return (
      <div className="item">`
        <img
          className="icon"
          src={icon}
          onClick={this.handleCoinIconClick}
        />
      </div>
    );
  }

  renderCryptoMarketCapSymbol(value: string) {
    return (
      <span className="item">{value}</span>
    );
  }

  renderCryptoName(value: string): JSX.Element {
    return (
      <span className="item">{value}</span>
    );
  }

  renderTotalSupply(coinTicker: string): JSX.Element {
    return (
      <span className="item">
        {this.props.coinRow ? this.props.coinRow.coinData.USD.SUPPLY : 'Supply Not Found'}
      </span>
    );
  }

  renderCryptoMarketCapChange(coinTicker: string): JSX.Element {
    return (
      <span className="item">
        {this.props.coinRow ? this.props.coinRow.coinData.USD.MKTCAP : 'Market Cap Not Found'}
      </span>
    );
  }

  render() {
    return (
      <div className={`flex-row${this.state.isExpanded ? '-expanded' : ''}`} key={this.props.cryptoName}>
        <div className="flex-col-icon">
          {this.renderCryptoMarketCapIcon(this.state.cryptoIcon)}
        </div>
        <div className="flex-col">
          {this.renderCryptoMarketCapSymbol(this.props.cryptoSymbol)}
        </div>
        <div className="flex-col">
          {this.renderCryptoName(this.props.cryptoName)}
        </div>
        <div className="flex-col">
          {this.renderTotalSupply(this.props.cryptoSymbol)}
        </div>
        <div className="flex-col">
          {this.renderCoinPriceCol(this.props.cryptoSymbol)}
        </div>
        <div className="flex-col">
          {this.renderCryptoMarketCapChange(this.props.cryptoSymbol)}
        </div>

      </div>
    );
  }
}

export default MarketCapListRow;