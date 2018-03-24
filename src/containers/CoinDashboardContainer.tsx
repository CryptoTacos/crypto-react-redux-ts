import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import {
    StoreState, FlattenedCoinData, HistoricalCoinData,
    HistoricalCoinDataForCandlestickChart
} from '../types';
import * as actions from '../actions/coinDashboardActions';
import CoinCardDetail from '../components/CoinCardDetail';
import CryptoCard from '../components/CryptoCard';
const cryptocurrencies = require('cryptocurrencies');

interface CoinDashboardProps {
    coinData: FlattenedCoinData[];
    historicalData: HistoricalCoinData[];
}

interface CoinDashboardState {

}

class CoinDashboardContainer extends React.Component<CoinDashboardProps, CoinDashboardState> {
    constructor(props: CoinDashboardProps) {
        super(props);
        this.state = {};
    }

    getHistorialData = (coinName: string): HistoricalCoinDataForCandlestickChart[] => {
        const historicalData: HistoricalCoinData | undefined =
            this.props.historicalData.find(element => element.coinName.toLowerCase() === coinName.toLowerCase());

        return historicalData ? historicalData.historicalCoinData : [];
    }

    getCoinCards = (): JSX.Element[] => {
        return this.props.coinData.map((coin) => (

            <div className="coin-card-flex-item" key={coin.name}>
                <CryptoCard
                    title={cryptocurrencies[coin.name]}
                    subtitle={coin.name}
                    avatarPath={require(`../icons/coins/color/${coin.USD.FROMSYMBOL.toLowerCase()}.svg`)}

                >
                    <CoinCardDetail
                        ticker={coin.USD.TOSYMBOL}
                        coinData={coin}
                        historicalCoinData={this.getHistorialData(coin.name)}
                        currencyContext={'USD'}
                    />
                </CryptoCard>
            </div >
        ));
    }

    render() {
        return (
            <div className="coin-card-dashboard">
                {this.getCoinCards()}
            </div>
        );
    }
}

interface StateFromProps {
    coinData: FlattenedCoinData[];
    historicalData: HistoricalCoinData[];
}

interface DispatchFromProps {

}

const mapStateToProps = (state: StoreState): StateFromProps => ({
    coinData: state.marketDataReducer.currentMarketData,
    historicalData: state.marketDataReducer.historicalMarketData,
});

const mapDispatchToProps = (dispatch: Dispatch<actions.CoinCardAction>): DispatchFromProps => ({

});

export default connect<StateFromProps, DispatchFromProps, {}>(
    mapStateToProps, mapDispatchToProps
)(CoinDashboardContainer);
