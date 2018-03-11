import * as React from 'react';
import * as actions from '../actions/cryptoMarketCapListActions';
import { StoreState, FlattenedCoinData } from '../types';
import { connect, Dispatch } from 'react-redux';
import { MarketCapList } from '../components/MarketCapList';

interface StateFromProps {
    title: string;
    coinData: FlattenedCoinData[];
}
interface DispatchFromProps {

}

export interface MarketCapListProps {
    coinData: FlattenedCoinData[];
    onClickCoinIcon?: (tickerSymbol: string) => void;
    title: string;
}

export interface MarketCapListState {

}

class MarketCapContainer extends React.Component<MarketCapListProps, MarketCapListState> {

    render() {
        return (
            <div>
                <MarketCapList
                    coinData={this.props.coinData}
                    title={this.props.title}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): StateFromProps => ({
    title: state.cryptoMarketCapListState.title,
    coinData: state.cryptoMarketCapListState.coinData,
});

const mapDispatchToProps = (dispatch: Dispatch<actions.CryptoMarketCapListAction>): DispatchFromProps => ({

});

export default connect<MarketCapListProps, MarketCapListState, {}>(
    mapStateToProps, mapDispatchToProps
)(MarketCapContainer);
