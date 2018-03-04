
import * as React from 'react';
const cryptocurrencies = require('cryptocurrencies');

// const PATH_TO_COLOR_COIN_ICONS = '../icons/coins/color/';
// const PATH_TO_BLACK_COIN_ICONS = '../icons/coins/black/';
// const SVG = '.svg';

class CryptoMarketCapList extends React.Component {

    // tslint:disable-next-line:no-any
    getCryptoMarketCapIcon(icon: any): JSX.Element {
        return (
            <img className="crypto-market-cap-col-icon" src={icon} />
        );
    }

    getCryptoMarketCapSymbol(value: string) {
        return (
            <span className="crypto-market-cap-col-item">{value}</span>
        );
    }

    getCryptoName(value: string): JSX.Element {
        return (
            <span className="crypto-market-cap-col-item">{value}</span>
        );
    }

    getCryptoMarketCapValue(value: string): JSX.Element {
        return (
            <span className="crypto-market-cap-col-item">{value}</span>
        );
    }

    getCryptoMarketCapChange(value: string): JSX.Element {
        return (
            <span className="crypto-market-cap-col-item">{value}</span>
        );
    }

    getCryptoMarketCapRow(cryptoSymbol: string, cryptoName: string): JSX.Element {
        let cryptoRow: JSX.Element;
        try {
            const cryptoIcon = require('../icons/coins/color/' + cryptoSymbol.toLowerCase() + '.svg');
            cryptoRow = (
                <div className={'crypto-market-cap-row'}>
                    <div className="crypto-market-cap-col">
                        {this.getCryptoMarketCapIcon(cryptoIcon)}
                    </div>
                    <div className="crypto-market-cap-col">
                        {this.getCryptoMarketCapSymbol(cryptoSymbol)}
                    </div>
                    <div className="crypto-market-cap-col">
                        {this.getCryptoName(cryptoName)}
                    </div>
                    <div className="crypto-market-cap-col">
                        {this.getCryptoMarketCapValue('')}
                    </div>
                    <div className="crypto-market-cap-col">
                        {this.getCryptoMarketCapChange('')}
                    </div>
                </div>
            );
        } catch (error) {
            console.error(error);
            cryptoRow = (<i />);
        }
        return cryptoRow;
    }

    getCrytpoMarketCapTableHeader(): JSX.Element {
        return (
            <div className={'crypto-market-cap-row'}>
                <div className="crypto-market-cap-col">
                    <h2 className="crypto-market-cap-col-item">{'Crypto Icon'}</h2>
                </div>
                <div className="crypto-market-cap-col">
                    <h2 className="crypto-market-cap-col-item">{'Crypto Symbol'}</h2>
                </div>
                <div className="crypto-market-cap-col">
                    <h2 className="crypto-market-cap-col-item">{'Crypto Name'}</h2>
                </div>
                <div className="crypto-market-cap-col">
                    <h2 className="crypto-market-cap-col-item">{'Market Cap Value'}</h2>
                </div>
                <div className="crypto-market-cap-col">
                    <h2 className="crypto-market-cap-col-item">{'Market Cap % Change'}</h2>
                </div>
            </div>
        );
    }

    getCryptoMarketCapList(): JSX.Element[] {
        const cryptos = cryptocurrencies.symbols();
        console.log(cryptocurrencies);
        const cryptoRows: JSX.Element[] = [];
        for (const cryptoSymbol of cryptos) {
            cryptoRows.push(this.getCryptoMarketCapRow(cryptoSymbol, cryptocurrencies[cryptoSymbol]));
        }
        return cryptoRows;

    }

    render() {
        return (
            <div className={'crypto-market-cap-list'}>
                {this.getCrytpoMarketCapTableHeader()}
                {this.getCryptoMarketCapList()}
            </div>
        );
    }
}

export default CryptoMarketCapList;