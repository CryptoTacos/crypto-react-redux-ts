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
