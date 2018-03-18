import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/coinDashboardActions';
import { StoreState, FlattenedCoinData } from '../types';
import CoinCardDetail from '../components/CoinCardDetail';
import CryptoCard from '../components/CryptoCard';
import { Tabs, Tab } from 'material-ui/Tabs';
const cryptocurrencies = require('cryptocurrencies');

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
                <div className="coin-card-flex-item">
                    <CryptoCard
                        title={cryptocurrencies[coin.name]}
                        subtitle={coin.name}
                        avatarPath={require(`../icons/coins/color/${coin.USD.FROMSYMBOL.toLowerCase()}.svg`)}

                    >
                        <Tabs>
                            <Tab label="Market Data">
                                <CoinCardDetail
                                    ticker={coin.USD.TOSYMBOL}
                                    coinData={coin}
                                    currencyContext={'USD'}
                                />
                            </Tab>
                            <Tab label="Twitter Feed">
                                <p>
                                    Here we can have a twitter feed of the latest coin relevant tweets,
                                    or any feed about the coin for that matter
                                </p>
                            </Tab>
                            <Tab label="Coin Bio">
                                <p>
                                    Potentially whitepaper here
                                </p>
                            </Tab>

                        </Tabs>
                    </CryptoCard>

                </div>
            );
        }
        return coinCards;
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
