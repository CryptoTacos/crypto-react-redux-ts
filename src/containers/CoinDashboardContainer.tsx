import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/coinDashboardActions';
import { StoreState, FlattenedCoinData } from '../types';
import CoinCardDetail from '../components/CoinCardDetail';
import CryptoCard from '../components/CryptoCard';

interface CoinDashboardProps {
    coinData: FlattenedCoinData[];
}

interface CoinDashboardState {

}

class CoinDashboardContainer extends React.Component<CoinDashboardProps, CoinDashboardState> {
    constructor(props: CoinDashboardProps) {
        super(props);
        this.state = {};
    }

    getCoinCards = (): JSX.Element[] => {
        const coinCards: JSX.Element[] = [];
        for (const coin of this.props.coinData) {
            coinCards.push(
                <CryptoCard
                    title={coin.name}
                    avatarPath={require(`../icons/coins/color/${coin.USD.FROMSYMBOL.toLowerCase()}.svg`)}
                >
                    <CoinCardDetail
                        ticker={coin.USD.TOSYMBOL}
                        coinData={coin}
                        currencyContext={'USD'}
                    />
                </CryptoCard>
            );
        }
        return coinCards;
    }

    render() {
        return (
            <div>
                {this.getCoinCards()}
            </div>
        );
    }
}

interface StateFromProps {
    coinData: FlattenedCoinData[];
}

interface DispatchFromProps {

}

const mapStateToProps = (state: StoreState): StateFromProps => ({
    coinData: state.cryptoMarketCapListState.coinData
});

const mapDispatchToProps = (dispatch: Dispatch<actions.CoinCardAction>): DispatchFromProps => ({

});

export default connect<StateFromProps, DispatchFromProps, {}>(
    mapStateToProps, mapDispatchToProps
)(CoinDashboardContainer);
