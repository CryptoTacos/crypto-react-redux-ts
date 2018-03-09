import * as React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

export interface Props {
    onClickSortByPriceChange: () => void;
    onClickSortByMarketCap: () => void;
    onClickSortByName: () => void;
}

const MarketCapButtonRow = ({onClickSortByMarketCap, onClickSortByName, onClickSortByPriceChange}: Props):
    JSX.Element => {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
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
        </MuiThemeProvider>
    );
};

export default MarketCapButtonRow;