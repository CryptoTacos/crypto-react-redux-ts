import MarketCapList from '../components/MarketCapList';
import * as actions from '../actions/cryptoMarketCapListActions';
import { StoreState } from '../types';
import { connect, Dispatch } from 'react-redux';

interface StateFromProps {
    title: string;
    cryptos: string[];
}

interface DispatchFromProps {
    onClick: () => void;
}

const mapStateToProps = (state: StoreState): StateFromProps => ({
    title: state.cryptoMarketCapListState.title,
    cryptos: state.cryptoMarketCapListState.cryptos,
});

const mapDispatchToProps = (dispatch: Dispatch<actions.CryptoMarketCapListAction>): DispatchFromProps => ({
    onClick: () => dispatch(actions.selectCoinIcon())
});

console.log(mapStateToProps);

export default connect<StateFromProps, DispatchFromProps, {}>(
    mapStateToProps, mapDispatchToProps
)(MarketCapList);
