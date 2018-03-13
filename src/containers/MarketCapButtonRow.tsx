import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions/marketCapButtonRowActions';
import { StoreState, FlattenedCoinData } from '../types';
import { connect, Dispatch } from 'react-redux';

export interface Props {
    onClickSortByPriceChange: () => void;
    onClickSortByMarketCap: () => void;
    onClickSortByName: () => void;
    coinData: FlattenedCoinData[];
}

const MarketCapButtonRow = ({onClickSortByMarketCap, onClickSortByName, onClickSortByPriceChange}: Props):
    JSX.Element => {
    return (
            <div className="market-cap-list-button-row">
                <RaisedButton
                    secondary={true}
                    label={'Sort By MarketCap'}
                    onClick={onClickSortByMarketCap}
                />
                <RaisedButton
                    secondary={true}
                    label={'Sort By Name'}
                    onClick={onClickSortByName}
                />
                <RaisedButton
                    secondary={true}
                    label={'Sort By %Change'}
                    onClick={onClickSortByPriceChange}
                />
            </div>
    );
};

interface StateFromProps {

}

interface DispatchFromProps {
    onClickSortByPriceChange: () => void;
    onClickSortByMarketCap: (coinData: FlattenedCoinData[]) => void;
    onClickSortByName: (coinData: FlattenedCoinData[]) => void;
}

const mapStateToProps = (state: StoreState): StateFromProps => ({
    coinData: state.cryptoMarketCapListState.coinData,
});

const mapDispatchToProps = (dispatch: Dispatch<actions.MarketCapMenuBarAction>): DispatchFromProps => ({
    onClickSortByPriceChange: () => null,
    onClickSortByMarketCap: (coinData: FlattenedCoinData[]) =>  {
        dispatch(actions.selectSortByMarketCap(coinData));
    },
    onClickSortByName: (coinData: FlattenedCoinData[]) => {
        dispatch(actions.selectSortByName(coinData));
    },
});

export default connect<StateFromProps, DispatchFromProps, {}>(
    mapStateToProps, mapDispatchToProps
)(MarketCapButtonRow);
