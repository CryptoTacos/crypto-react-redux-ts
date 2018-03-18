import * as React from 'react';

interface CoinMarketDataRowProps {
    name: string;
    marketCap?: number | string;
    price?: number | string;
    volume24h?: number | string;
    circulatingSupply?: number | string;
    change24h?: number | string;
}

interface CoinMarketDataRowState {

}

class CoinMarketDataRow extends React.Component<CoinMarketDataRowProps, CoinMarketDataRowState> {
    constructor(props: CoinMarketDataRowProps) {
        super(props);
        this.state = {};
    }

    renderMarketCap = () => (
        <div className="flex-col">
            <div className="flex-row">
                <span className="data-label">{'Market Cap'}</span>
            </div>
            <div className="flex-row">
                <span className="data-value">{`${this.props.marketCap}`}</span>;
            </div>
        </div>
    )

    renderPrice = () => (
        <div className="flex-col">
            <div className="flex-row">
                <span className="data-label">{'Price'}</span>
            </div>
            <div className="flex-row">
                <span className="data-value">{this.props.price}</span>;
            </div>
        </div>
    )

    renderVolume24H = () => (
        <div className="flex-col">
            <div className="flex-row">
                <span className="data-label">{'Volume (24h)'}</span>
            </div>
            <div className="flex-row">
                <span className="data-value">{this.props.volume24h}</span>;
            </div>
        </div>
    )

    renderCirculatingSupply = () => (
        <div className="flex-col">
            <div className="flex-row">
                <span className="data-label">{'Circulating Supply'}</span>
            </div>
            <div className="flex-row">
                <span className="data-value">{this.props.circulatingSupply}</span>;
            </div>
        </div>
    )
    renderChange24H = () => (
        <div className="flex-col">
            <div className="flex-row">
                <span className="data-label">{'Change (24h)'}</span>
            </div>
            <div className="flex-row">
                <span className="data-value">{this.props.change24h}</span>;
            </div>
        </div>
    )

    render() {
        return (
            <div className="market-data-row">
                {this.props.marketCap ? this.renderMarketCap() : null}
                {this.props.price ? this.renderPrice() : null}
                {this.props.volume24h ? this.renderVolume24H() : null}
                {this.props.circulatingSupply ? this.renderCirculatingSupply() : null}
                {this.props.change24h ? this.renderChange24H() : null}
            </div>
        );
    }
}

export default CoinMarketDataRow;