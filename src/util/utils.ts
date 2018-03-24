export const getMinimzedNumber = (value: number): string => {
    const billion = 1000000000;
    const million = 1000000;
    if (value >= billion) {
        return `${Number(value / billion).toFixed(3)} billion`;
    } else if (value >= million) {
        return `${Number(value / million).toFixed(3)} million`;
    }
    return `${Number(value).toFixed(3)}`;
};

export const getCurrencyPrefix = (currency: string): string => {
    switch (currency) {
        case 'USD':
          return '$';
        case 'EUR':
          return '€';
        default:
          return '$';
      }
};

// This is a temporary check to see if we have an icon for the coin... if not we will not
// consider the data for the coin
export const getAvailableCoins = (): string[] => {
    console.log('get available coins');
    const cryptoCurrencies: string[] = require('cryptocurrencies').symbols();
    const appCoins: string[] = [];
    for (const coin of cryptoCurrencies) {
        try {
            require('../icons/coins/color/' + coin.toLowerCase() + '.svg');
            appCoins.push(coin);
        } catch (error) {
            continue;
        }
    }
    return appCoins;
};
