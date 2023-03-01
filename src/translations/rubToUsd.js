const DOLLAR_EXCHANGE_RATE = 75;

export function rubToUsd(value, currency) {
    if (isNaN(value) || typeof value === 'undefined') {
        return 0;
    }
    if (currency === 'RUB') {
        return value;
    } else {
        return (value / DOLLAR_EXCHANGE_RATE).toFixed(2);
    }
}