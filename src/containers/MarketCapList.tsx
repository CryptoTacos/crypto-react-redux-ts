import MarketCapList from '../components/MarketCapList';
import * as actions from '../actions/cryptoMarketCapListActions';
import { StoreState, FlattenedCoinData } from '../types';
import { connect, Dispatch } from 'react-redux';

interface StateFromProps {
    title: string;
    coinData: FlattenedCoinData[];
}
interface DispatchFromProps {
    onClick: () => void;
}

const mapStateToProps = (state: StoreState): StateFromProps => ({
    title: state.cryptoMarketCapListState.title,
    coinData: state.cryptoMarketCapListState.coinData,
});

const mapDispatchToProps = (dispatch: Dispatch<actions.CryptoMarketCapListAction>): DispatchFromProps => ({
    onClick: () => dispatch(actions.selectCoinIcon())
});

export default connect<StateFromProps, DispatchFromProps, {}>(
    mapStateToProps, mapDispatchToProps
)(MarketCapList);
