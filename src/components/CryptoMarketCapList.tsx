
import * as React from 'react';
import images from '../icons/cryptoCoinsIcons';
const cryptocurrencies = require('cryptocurrencies');

class CryptoMarketCapList extends React.Component {

    getCryptoMarketCapIcon(value: string): JSX.Element {
        console.log('trying to set value of component = ' + value);
        return (
            <img src={images[value]} style={{ width: '20%' }} />
        );
    }

    getCryptoMarketCapSymbol(value: string) {
        return (
            <span style={{ width: '20%' }}>{value}</span>
        );
    }

    getCryptoName(value: string): JSX.Element {
        return (
            <span style={{ width: '20%' }}>{value}</span>
        );
    }

    getCryptoMarketCapValue(value: string): JSX.Element {
        return (
            <div style={{ width: '20%' }}>
                {'market cap value'}
            </div>
        );
    }

    getCryptoMarketCapChange(value: string): JSX.Element {
        return (
            <div style={{ paddingLeft: '20px' }}>
                {'market cap change %'}
            </div>
        );
    }

    getCryptoMarketCapRow(cryptoSymbol: string, cryptoName: string): JSX.Element {
        return (
            <div className={'crypto-market-cap-row'}>
                {this.getCryptoMarketCapIcon(cryptoSymbol)}
                {this.getCryptoMarketCapSymbol(cryptoSymbol)}
                {this.getCryptoName(cryptoName)}
                {this.getCryptoMarketCapValue('')}
                {this.getCryptoMarketCapChange('')}
            </div>
        );
    }

    getCrytpoMarketCapTableHeader(): JSX.Element {
        return (
            <div className={'crypto-market-cap-row'}>
                <h2 style={{ width: '20%' }}>{'Crypto Icon'}</h2>
                <h2 style={{ width: '20%' }}>{'Crypto Symbol'}</h2>
                <h2 style={{ width: '20%' }}>{'Crypto Name'}</h2>
                <h2 style={{ width: '20%' }}>{'Market Cap Value'}</h2>
                <h2 style={{ width: '20%' }}>{'Market Cap % Change'}</h2>
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