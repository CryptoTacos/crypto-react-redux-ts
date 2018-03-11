import * as React from 'react';
import { CoinRow } from '../types';

export interface MarketCapListRowDetailViewProps {
    coinRow: CoinRow;
}

export interface MarketCapListRowDetailViewState {

}

class MarketCapListRowDetailView extends
    React.Component<MarketCapListRowDetailViewProps, MarketCapListRowDetailViewState> {
    constructor(props: MarketCapListRowDetailViewProps) {
        super(props);
        this.state = {};
    }

    getCoinDetailDataRow = (): JSX.Element => {
        return (
            <div className="coin-detail-row">
                <div className="flex-col">
                    <span className="item">{this.props.coinRow.coinData.USD.CHANGE24HOUR}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{this.props.coinRow.coinData.USD.CHANGEDAY}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{this.props.coinRow.coinData.USD.CHANGEPCT24HOUR}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{this.props.coinRow.coinData.USD.CHANGEPCTDAY}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{this.props.coinRow.coinData.USD.HIGH24HOUR}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{this.props.coinRow.coinData.USD.HIGHDAY}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{this.props.coinRow.coinData.USD.LASTMARKET}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{this.props.coinRow.coinData.USD.LOW24HOUR}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{this.props.coinRow.coinData.USD.LOWDAY}</span>
                </div>
            </div>
        );
    }

    getCoinDetailHeaderRow = (): JSX.Element => {
        return (
            <div className="coin-detail-row">
                <div className="flex-col">
                    <span className="item">{'Change 24 Hours'}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{'Change Day'}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{'Change % 24 Hours'}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{'Change % Day'}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{'High 24 Hours'}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{'High Day'}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{'Last Market'}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{'Low 24 Hours'}</span>
                </div>
                <div className="flex-col">
                    <span className="item">{'Low Day'}</span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.getCoinDetailHeaderRow()}
                {this.getCoinDetailDataRow()}
            </div>
        );
    }
}

export default MarketCapListRowDetailView;