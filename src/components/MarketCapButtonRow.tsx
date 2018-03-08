import * as React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

const MarketCapButtonRow = (): JSX.Element => {
    return (
        <div>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <RaisedButton secondary={true}>Sort By Market Cap</RaisedButton>
            </MuiThemeProvider>

        </div>
    );
};

export default MarketCapButtonRow;