import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions/marketCapButtonRowActions';
import { StoreState, FlattenedCoinData } from '../types';
import { connect, Dispatch } from 'react-redux';
import { DropDownMenu, MenuItem } from 'material-ui';

export interface Props {
    onClickSortByPriceChange: () => void;
    onClickSortByMarketCap: () => void;
    onClickSortByName: () => void;
    coinData: FlattenedCoinData[];
}

export interface MarketCapButtonRowProps {
    onClickSortByPriceChange: () => void;
    onClickSortByMarketCap: () => void;
    onClickSortByName: () => void;
    onChangeCurrency: (currency: string) => void;
}

interface MarketCapButtonRowState {
    currencyValue: string;
}

class MarketCapButtonRow extends React.Component<MarketCapButtonRowProps, MarketCapButtonRowState> {

    constructor(props: MarketCapButtonRowProps) {
        super(props);
        this.state = {
            currencyValue: 'USD'
        };
    }

    renderFaIcon = (icon: string): JSX.Element => {
        return (
            <i className={`fa fa-${icon}`} />
        );
    }

    handleChange = (event: React.SyntheticEvent<{}>, index: number, value: string): void => {
        this.setState({ currencyValue: value });
        this.props.onChangeCurrency(value);
    }

    render() {
        return (
            <div className="market-cap-list-button-row">
                <div className="market-cap-list-button-col-buttons">
                    <div className="market-cap-list-button-row-buttons">
                        <RaisedButton
                            secondary={true}
                            label={'Sort By MarketCap'}
                            onClick={this.props.onClickSortByMarketCap}
                        />
                        <RaisedButton
                            secondary={true}
                            label={'Sort By Name'}
                            onClick={this.props.onClickSortByName}
                        />
                        <RaisedButton
                            secondary={true}
                            label={'Sort By %Change'}
                            onClick={this.props.onClickSortByPriceChange}
                        />
                    </div>
                </div>
                <div className="market-cap-list-button-col-dropdown">
                    <DropDownMenu
                        value={this.state.currencyValue}
                        onChange={this.handleChange}
                    >
                        <MenuItem
                            value="USD"
                            primaryText="USD"
                            leftIcon={this.renderFaIcon('dollar')}
                        />
                        <MenuItem
                            value="EUR"
                            primaryText="EUR"
                            leftIcon={this.renderFaIcon('eur')}
                        />
                    </DropDownMenu>
                </div>
            </div>
        );
    }
}
interface StateFromProps {

}

interface DispatchFromProps {
    onClickSortByPriceChange: () => void;
    onChangeCurrency: (currency: string) => void;
    onClickSortByMarketCap: (coinData: FlattenedCoinData[]) => void;
    onClickSortByName: (coinData: FlattenedCoinData[]) => void;
}

const mapStateToProps = (state: StoreState): StateFromProps => ({
    coinData: state.cryptoMarketCapListState.coinData,
});

const mapDispatchToProps = (dispatch: Dispatch<actions.MarketCapMenuBarAction>): DispatchFromProps => ({
    onClickSortByPriceChange: () => null,
    onClickSortByMarketCap: (coinData: FlattenedCoinData[]) => dispatch(actions.selectSortByMarketCap(coinData)),
    onClickSortByName: (coinData: FlattenedCoinData[]) => dispatch(actions.selectSortByName(coinData)),
    onChangeCurrency: (currency: string) => dispatch(actions.onChangeCurrency(currency))
});

export default connect<StateFromProps, DispatchFromProps, {}>(
    mapStateToProps, mapDispatchToProps
)(MarketCapButtonRow);
