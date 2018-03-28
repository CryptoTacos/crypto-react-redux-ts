import * as React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

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
        return (

            <AutoComplete
                floatingLabelText="Search for Coins"
                filter={AutoComplete.caseInsensitiveFilter}
                fullWidth={true}
                dataSource={this.getMenuItems()}
            />

        );
    }

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
                            primaryText={coin}
                            rightIcon={(<img src={require('../icons/coins/color/' + coin.toLowerCase() + '.svg')} />)}
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