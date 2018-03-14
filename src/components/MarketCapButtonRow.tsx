import * as React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import { DropDownMenu, MenuItem } from 'material-ui';

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
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)} >
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
            </MuiThemeProvider>
        );
    }
}

export default MarketCapButtonRow;