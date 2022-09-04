export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type setCurrencyAmountType = {
    type: 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE'
    amountOfBYN: string
    amountOfCurrency: string
};
export const setCurrencyAmount = (amountOfBYN: string, amountOfCurrency: string): setCurrencyAmountType => ({
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE, amountOfBYN, amountOfCurrency
});

export type setActionType = {
    type: 'CurrencyExchange/CHANGE_CHANGE_ACTION'
    isBuying: boolean
};
export const setAction = (isBuying: boolean): setActionType => ({
    type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION, isBuying
});

export type changeCurrencyType = {
    type: 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
    currentCurrency: string
};
export const changeCurrency = (currentCurrency: string): changeCurrencyType => ({
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY, currentCurrency
});

export type CurrencyReducersTypes = setCurrencyAmountType | setActionType | changeCurrencyType;