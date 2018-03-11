import * as React from 'react';
import { CoinRow } from '../types';
import MarketCapListRowDetailView from './MarketCapListRowDetailView';

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
      cryptoIcon: require(`../icons/coins/color/${this.props.cryptoSymbol.toLowerCase()}.svg`)
    };
  }

  handleCoinIconClick = (): void => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  }

  renderCoinPriceCol = (): JSX.Element => {
    return (
      <span className={this.props.coinRow ? `item ${this.props.coinRow.coinData.style}` : 'item'}>
        {this.props.coinRow.coinData.USD.PRICE}
      </span>
    );
  }

  renderCryptoMarketCapIcon = (): JSX.Element => {
    return (
      <div className="item">
        <img
          className="icon"
          src={this.state.cryptoIcon}
          onClick={this.handleCoinIconClick}
        />
      </div>
    );
  }

  renderCryptoMarketCapSymbol = () => {
    return (
      <span className="item">{this.props.cryptoSymbol}</span>
    );
  }

  renderCryptoName = (): JSX.Element => {
    return (
      <span className="item">{this.props.cryptoName}</span>
    );
  }

  renderTotalSupply = (): JSX.Element => {
    return (
      <span className="item">
        {this.props.coinRow.coinData.USD.SUPPLY}
      </span>
    );
  }

  renderCryptoMarketCapChange = (): JSX.Element => {
    return (
      <span className="item">
        {this.props.coinRow.coinData.USD.MKTCAP}
      </span>
    );
  }

  renderBasicCoinColumns = (): JSX.Element => {
    return (
      <div className="flex-row">
        <div className="flex-col-icon">
          {this.renderCryptoMarketCapIcon()}
        </div>
        <div className="flex-col">
          {this.renderCryptoMarketCapSymbol()}
        </div>
        <div className="flex-col">
          {this.renderCryptoName()}
        </div>
        <div className="flex-col">
          {this.renderTotalSupply()}
        </div>
        <div className="flex-col">
          {this.renderCoinPriceCol()}
        </div>
        <div className="flex-col">
          {this.renderCryptoMarketCapChange()}
        </div>
      </div>
    );
  }

  renderDetailedView = (): JSX.Element => {
    return (
      <div className="crypto-market-cap-list">
        {this.renderBasicCoinColumns()}
        <MarketCapListRowDetailView coinRow={this.props.coinRow} />
      </div>
    );
  }

  render() {
    return this.state.isExpanded ? this.renderDetailedView() : this.renderBasicCoinColumns();
  }
}

export default MarketCapListRow;