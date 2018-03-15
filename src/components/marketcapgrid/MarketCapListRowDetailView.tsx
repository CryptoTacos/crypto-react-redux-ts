import * as React from 'react';
import { CoinRow, CoinData } from '../../types';

export interface MarketCapListRowDetailViewProps {
    coinRow: CoinRow;
    currencyContext: string;
}

export interface MarketCapListRowDetailViewState {

}

class MarketCapListRowDetailView extends
    React.Component<MarketCapListRowDetailViewProps, MarketCapListRowDetailViewState> {
    constructor(props: MarketCapListRowDetailViewProps) {
        super(props);
        this.state = {};
    }

    getCurrencyContext = (): CoinData => {
        switch (this.props.currencyContext) {
            case 'USD':
                return this.props.coinRow.coinData.USD;
            case 'EUR':
                return this.props.coinRow.coinData.EUR;
            default:
                return this.props.coinRow.coinData.USD;
        }
    }

    getCurrencyPrefix = (): string => {
        switch (this.props.currencyContext) {
            case 'USD':
                return '$';
            case 'EUR':
                return '€';
            default:
                return '$';
        }
    }

    getMinimzedNumber = (value: number): string => {
        const billion = 1000000000;
        const million = 1000000;
        if (value >= billion) {
            return `${Number(value / billion).toFixed(3)} billion`;
        } else if (value >= million) {
            return `${Number(value / million).toFixed(3)} million`;
        }
        return `${Number(value).toFixed(3)}`;
    }

    getCoinDetailDataRow = (): JSX.Element => {
        return (
            <div className="coin-detail-row">
                <div className="flex-col">
                    <span className="item">
                        {`${this.getCurrencyPrefix()}${this.getMinimzedNumber(this.getCurrencyContext().CHANGE24HOUR)}`}
                    </span>
                </div>
                <div className="flex-col">
                    <span className="item">
                        {`${this.getCurrencyPrefix()}${this.getMinimzedNumber(this.getCurrencyContext().CHANGEDAY)}`}
                    </span>
                </div>
                <div className="flex-col">
                    <span className="item">
                        {`${this.getMinimzedNumber(this.getCurrencyContext().CHANGEPCT24HOUR)}%`}
                    </span>
                </div>
                <div className="flex-col">
                    <span className="item">{`${this.getMinimzedNumber(this.getCurrencyContext().CHANGEPCTDAY)}%`}</span>
                </div>
                <div className="flex-col">
                    <span className="item">
                        {`${this.getCurrencyPrefix()}${this.getCurrencyContext().HIGH24HOUR}`}
                    </span>
                </div>
                <div className="flex-col">
                    <span className="item">
                        {`${this.getCurrencyPrefix()}${this.getCurrencyContext().HIGHDAY}`}
                    </span>
                </div>
                <div className="flex-col">
                    <span className="item">{this.getCurrencyContext().LASTMARKET}</span>
                </div>
                <div className="flex-col">
                    <span className="item">
                        {`${this.getCurrencyPrefix()}${this.getCurrencyContext().LOW24HOUR}`}
                    </span>
                </div>
                <div className="flex-col">
                    <span className="item">
                        {`${this.getCurrencyPrefix()}${this.getCurrencyContext().LOWDAY}`}
                    </span>
                </div>
            </div>
        );
    }

    getCoinDetailHeaderRow = (): JSX.Element => {
        return (
            <div className="coin-detail-row">
                <div className="flex-col">
                    <span className="item coin-detail-header">{'Change 24 Hours'}</span>
                </div>
                <div className="flex-col">
                    <span className="item coin-detail-header">{'Change Day'}</span>
                </div>
                <div className="flex-col">
                    <span className="item coin-detail-header">{'Change % 24 Hours'}</span>
                </div>
                <div className="flex-col">
                    <span className="item coin-detail-header">{'Change % Day'}</span>
                </div>
                <div className="flex-col">
                    <span className="item coin-detail-header">{'High 24 Hours'}</span>
                </div>
                <div className="flex-col">
                    <span className="item coin-detail-header">{'High Day'}</span>
                </div>
                <div className="flex-col">
                    <span className="item coin-detail-header">{'Last Market'}</span>
                </div>
                <div className="flex-col">
                    <span className="item coin-detail-header">{'Low 24 Hours'}</span>
                </div>
                <div className="flex-col">
                    <span className="item coin-detail-header">{'Low Day'}</span>
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