import * as actions from '../actions/marketCapButtonRowActions';
import MarketCapButtonRow from '../components/MarketCapButtonRow';
import { StoreState } from '../types';
import { connect, Dispatch } from 'react-redux';

interface StateFromProps {

}

interface DispatchFromProps {
    onClickSortByPriceChange: () => void;
    onClickSortByMarketCap: () => void;
    onClickSortByName: () => void;
}

const mapStateToProps = (state: StoreState): StateFromProps => ({

});

const mapDispatchToProps = (dispatch: Dispatch<actions.MarketCapMenuBarAction>): DispatchFromProps => ({
    onClickSortByPriceChange: () => null,
    onClickSortByMarketCap: () =>  dispatch(actions.selectSortByMarketCap()),
    onClickSortByName: () => dispatch(actions.selectSortByName()),
});

export default connect<StateFromProps, DispatchFromProps, {}>(
    mapStateToProps, mapDispatchToProps
)(MarketCapButtonRow);