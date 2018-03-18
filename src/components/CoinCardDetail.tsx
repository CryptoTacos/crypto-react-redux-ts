import * as React from 'react';
import { CoinData, FlattenedCoinData } from '../types';
import CoinMarketDataRow from './CoinMarketDataRow';
import { getMinimzedNumber, getCurrencyPrefix } from '../util/utils';
import ExpandableCardSection from './ExpandableCardSection';

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

    render(): JSX.Element {
        return (
            <div>
                <CoinMarketDataRow
                    name={this.props.ticker}
                    marketCap={
                        // tslint:disable-next-line:max-line-length
                        `${getCurrencyPrefix(this.props.currencyContext)}${getMinimzedNumber(this.getCurrencyContext().MKTCAP)}`}
                    price={`${getCurrencyPrefix(this.props.currencyContext)}${this.getCurrencyContext().PRICE}`}
                    volume24h={getMinimzedNumber(this.getCurrencyContext().VOLUME24HOUR)}
                    change24h={getMinimzedNumber(this.getCurrencyContext().CHANGE24HOUR)}
                />

                <ExpandableCardSection>
                    <p>Here we can have a twitter feed of the latest coin relevant tweets,
                        or any feed about the coin for that matter</p>

                    <p>Potentially whitepaper here</p>

                    <p>Maybe a chart here</p>
                </ExpandableCardSection>
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
}

export default CoinCardDetail;
