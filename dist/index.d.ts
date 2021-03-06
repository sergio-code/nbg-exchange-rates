export declare type ForeignCurrency = "AED" | "AMD" | "AUD" | "AZN" | "BGN" | "BRL" | "BYN" | "CAD" | "CHF" | "CNY" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HKD" | "HUF" | "ILS" | "INR" | "IRR" | "ISK" | "JPY" | "KGS" | "KRW" | "KWD" | "KZT" | "MDL" | "NOK" | "NZD" | "PLN" | "QAR" | "RON" | "RSD" | "RUB" | "SEK" | "SGD" | "TJS" | "TMT" | "TRY" | "UAH" | "USD" | "UZS" | "ZAR";
export declare type Currency = ForeignCurrency | "GEL";
export interface ICurrencyRateData {
    ratePerAmount: number;
    amount: number;
    rate: number;
    spell: string;
}
export declare type IRatesCache = {
    [key in ForeignCurrency]?: ICurrencyRateData | undefined;
};
export default class NbgRates {
    cache: IRatesCache | undefined;
    dateUpdated: Date | undefined;
    updatingPromise: Promise<any> | undefined;
    verbose: boolean;
    updatingFlag: boolean;
    private lifetime;
    constructor(lifetime?: number, liveUpdate?: boolean, verbose?: boolean);
    convertSync: (currencyFrom: Currency, currencyTo: Currency, amount?: number) => number;
    convert: (currencyFrom: Currency, currencyTo: Currency, amount?: number) => Promise<number>;
    rateSync: (currency: Currency) => number;
    rate: (currency: Currency) => Promise<number>;
    private check;
    private update;
}
