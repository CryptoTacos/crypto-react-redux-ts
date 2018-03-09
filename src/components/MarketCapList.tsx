import * as React from 'react';
import { FlattenedCoinData } from '../types';
const cryptocurrencies = require('cryptocurrencies');

export interface Props {
    coinData: FlattenedCoinData[];
    onClick?: () => void;
    title: string;
}

function MarketCapList({ coinData, onClick, title }: Props) {

    const getCoinPriceCol = (coinTicker: string): JSX.Element => {
        const coin: FlattenedCoinData | undefined = coinData.find(element => element.name === coinTicker);
        return (
            <span className={coin ? 'item ' + coin.style : 'item'}>
                {coin ? coin.USD.PRICE : 'Price Not Found'}
            </span>
        );
    };

    const getCryptoMarketCapIcon = (icon: string): JSX.Element => {
        return (
            <div className="item">
                <img
                    className="icon"
                    src={icon}
                    onClick={onClick}
                />
            </div>
        );
    };

    const getCryptoMarketCapSymbol = (value: string) => {
        return (
            <span className="item">{value}</span>
        );
    };

    const getCryptoName = (value: string): JSX.Element => {
        return (
            <span className="item">{value}</span>
        );
    };

    const getTotalSupply = (coinTicker: string): JSX.Element => {
        const coin: FlattenedCoinData | undefined = coinData.find(element => element.name === coinTicker);
        return (
            <span className="item">
                {coin ? coin.USD.SUPPLY : 'Supply Not Found'}
            </span>
        );
    };

    const getCryptoMarketCapChange = (coinTicker: string): JSX.Element => {
        const coin: FlattenedCoinData | undefined = coinData.find(element => element.name === coinTicker);
        return (
            <span className="item">
                {coin ? coin.USD.MKTCAP : 'Market Cap Not Found'}
            </span>
        );
    };

    const CryptoMarketCapListTableHeader = (): JSX.Element => {
        return (
            <div className={'flexrow'}>
                <div className="flexcol-icon">
                    <h2 className="item">{''}</h2>
                </div>
                <div className="flexcol">
                    <h2 className="item">{'Ticker'}</h2>
                </div>
                <div className="flexcol">
                    <h2 className="item">{'Full Name'}</h2>
                </div>
                <div className="flexcol">
                    <h2 className="item">{'Total Supply'}</h2>
                </div>
                <div className="flexcol">
                    <h2 className="item">{'Current Price'}</h2>
                </div>
                <div className="flexcol">
                    <h2 className="item">{'Market Cap'}</h2>
                </div>
            </div>
        );
    };

    const getCryptoMarketCapRow = (cryptoSymbol: string, cryptoName: string, key: number): JSX.Element | null => {
        let cryptoRow: JSX.Element;
        try {
            const cryptoIcon = require('../icons/coins/color/' + cryptoSymbol.toLowerCase() + '.svg');
            cryptoRow = (
                <div className={'flexrow'} key={key}>
                    <div className="flexcol-icon">
                        {getCryptoMarketCapIcon(cryptoIcon)}
                    </div>
                    <div className="flexcol">
                        {getCryptoMarketCapSymbol(cryptoSymbol)}
                    </div>
                    <div className="flexcol">
                        {getCryptoName(cryptoName)}
                    </div>
                    <div className="flexcol">
                        {getTotalSupply(cryptoSymbol)}
                    </div>
                    <div className="flexcol">
                        {getCoinPriceCol(cryptoSymbol)}
                    </div>
                    <div className="flexcol">
                        {getCryptoMarketCapChange(cryptoSymbol)}
                    </div>

                </div>
            );
        } catch (error) {
            console.log(error);
            return null;
        }
        return cryptoRow;
    };

    const getCryptoMarketCapList = (): JSX.Element[] => {
        const cryptoRows: JSX.Element[] = [];
        let keyIterator = 0;
        let newRow;
        for (const coin of coinData) {
            newRow = getCryptoMarketCapRow(coin.name, cryptocurrencies[coin.name], keyIterator);
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