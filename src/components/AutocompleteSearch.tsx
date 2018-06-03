import * as React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

interface AutoCompleteMenuItem {
    text: string;
    value: JSX.Element;
}

interface AutoCompleteSearchProps {
}

interface AutoCompleteSearchState {

}

class AutoCompleteSearch extends React.Component<AutoCompleteSearchProps, AutoCompleteSearchState> {
    constructor(props: AutoCompleteSearchProps) {
        super(props);
        this.state = {};
    }

    render() {
        this.getMenuItems();
        return (
            <div />

        );
    }
    /* Autocomplete has been removed in material-ui v1
        <AutoComplete
        floatingLabelText="Search for Coins"
        filter={AutoComplete.caseInsensitiveFilter}
        fullWidth={true}
        dataSource={this.getMenuItems()}
    />
    */

    private getMenuItems = (): AutoCompleteMenuItem[] => {
        const cryptoCurrencies: string[] = require('cryptocurrencies').symbols();
        const menuItems: AutoCompleteMenuItem[] = [];
        for (const coin of cryptoCurrencies) {
            try {
                require('../icons/coins/color/' + coin.toLowerCase() + '.svg');
                menuItems.push({
                    text: coin,
                    value: (
                        <MenuItem
                        />
                    )
                });
            } catch (error) {
                continue;
            }
        }
        return menuItems;
    }
}

export default AutoCompleteSearch;