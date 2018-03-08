import * as React from 'react';
const cryptocurrencies = require('cryptocurrencies');

export interface Props {
    cryptos: string[];
    // tslint:disable-next-line:no-any
    coinData: any;
    onClick?: () => void;
    title: string;
}

function MarketCapList({ cryptos, coinData, onClick, title }: Props) {

    const getCryptoMarketCapIcon = (icon: string): JSX.Element => {
        return (
            <img
                className="crypto-market-cap-col-icon"
                src={icon}
                onClick={onClick}
            />
        );
    };

    const getCryptoMarketCapSymbol = (value: string) => {
        return (
            <span className="crypto-market-cap-col-item">{value}</span>
        );
    };

    const getCryptoName = (value: string): JSX.Element => {
        return (
            <span className="crypto-market-cap-col-item">{value}</span>
        );
    };

    const getTotalSupply = (coinTicker: string): JSX.Element => {
        const findVal = () => {
            try {
                return coinData[coinTicker.toUpperCase()] ?
                    coinData[coinTicker.toUpperCase()].TotalCoinSupply : 'Total Supply Not Found';

            } catch (error) {
                return 'Total Supply Not Found';
            }
        };
        return (
            <span className="crypto-market-cap-col-item">{
                findVal()
            }</span>
        );
    };

    const getCryptoMarketCapChange = (value: string): JSX.Element => {
        return (
            <span className="crypto-market-cap-col-item">{value}</span>
        );
    };

    const CryptoMarketCapListTableHeader = (): JSX.Element => {
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
                    <h2 className="crypto-market-cap-col-item">{'Total Supply'}</h2>
                </div>
                <div className="crypto-market-cap-col">
                    <h2 className="crypto-market-cap-col-item">{'Market Cap % Change'}</h2>
                </div>
            </div>
        );
    };

    const getCryptoMarketCapRow = (cryptoSymbol: string, cryptoName: string, key: number): JSX.Element | null => {
        let cryptoRow: JSX.Element;
        try {
            const cryptoIcon = require('../icons/coins/color/' + cryptoSymbol.toLowerCase() + '.svg');
            cryptoRow = (
                <div className={'crypto-market-cap-row'} key={key}>
                    <div className="crypto-market-cap-col">
                        {getCryptoMarketCapIcon(cryptoIcon)}
                    </div>
                    <div className="crypto-market-cap-col">
                        {getCryptoMarketCapSymbol(cryptoSymbol)}
                    </div>
                    <div className="crypto-market-cap-col">
                        {getCryptoName(cryptoName)}
                    </div>
                    <div className="crypto-market-cap-col">
                        {getTotalSupply(cryptoSymbol)}
                    </div>
                    <div className="crypto-market-cap-col">
                        {getCryptoMarketCapChange('')}
                    </div>
                </div>
            );
        } catch (error) {
            return null;
        }
        return cryptoRow;
    };

    const getCryptoMarketCapList = (): JSX.Element[] => {
        const cryptoRows: JSX.Element[] = [];
        let keyIterator = 0;
        let newRow;
        for (const cryptoSymbol of cryptos) {
            newRow = getCryptoMarketCapRow(cryptoSymbol, cryptocurrencies[cryptoSymbol], keyIterator);
            if (newRow) {
                cryptoRows.push(newRow);
                keyIterator = keyIterator + 1;
            }

        }
        return cryptoRows;

    };

    return (
        <div className={'crypto-market-cap-list'}>
            {CryptoMarketCapListTableHeader()}
            {getCryptoMarketCapList()}
        </div>
    );
}

export default MarketCapList;