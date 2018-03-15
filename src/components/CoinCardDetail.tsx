import * as React from 'react';
import { CoinData, FlattenedCoinData } from '../types';

interface CoinCardDetailProps {
    ticker: string;
    currencyContext: string;
    coinData: FlattenedCoinData;
}

interface CoinCardDetailState {

}

class CoinCardDetail extends React.Component<CoinCardDetailProps, CoinCardDetailState> {
    constructor(props: CoinCardDetailProps) {
        super(props);
        this.state = {};
    }

    renderIcon = (): JSX.Element =>
        <img src={require(`../icons/coins/color/${this.props.ticker.toLowerCase()}.svg`)} />

    renderTickerBox = (): JSX.Element => (
        <span className={`item ${this.props.coinData.style}`}>
            {`${this.getCurrencyPrefix()}${this.getCurrencyContext().PRICE}`}
        </span>
    )

    render(): JSX.Element {
        return (
            <div>
                {this.renderTickerBox()}
            </div>
        );
    }

    private getCurrencyContext = (): CoinData => {
        switch (this.props.currencyContext) {
            case 'USD':
                return this.props.coinData.USD;
            case 'EUR':
                return this.props.coinData.EUR;
            default:
                return this.props.coinData.USD;
        }
    }

    private getCurrencyPrefix = (): string => {
        switch (this.props.currencyContext) {
            case 'USD':
                return '$';
            case 'EUR':
                return '€';
            default:
                return '$';
        }
    }
}

export default CoinCardDetail;
