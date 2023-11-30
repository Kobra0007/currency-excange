import { handleActions } from 'redux-actions';

import {
  currenciesFetch,
  currenciesFetchFail,
  currenciesFetchSuccess,
} from '../actions/main';

export const defaultState = {
  error: null,
  isLoading: false,
  currencies: {
    AUD: 'Australian Dollar',
    BGN: 'Bulgarian Lev',
    BRL: 'Brazilian Real',
    CAD: 'Canadian Dollar',
    CHF: 'Swiss Franc',
    CNY: 'Chinese Renminbi Yuan',
    CZK: 'Czech Koruna',
    DKK: 'Danish Krone',
    EUR: 'Euro',
    GBP: 'British Pound',
    HKD: 'Hong Kong Dollar',
    HUF: 'Hungarian Forint',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli New Sheqel',
    INR: 'Indian Rupee',
    ISK: 'Icelandic Króna',
    JPY: 'Japanese Yen',
    KRW: 'South Korean Won',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    NOK: 'Norwegian Krone',
    NZD: 'New Zealand Dollar',
    PHP: 'Philippine Peso',
    PLN: 'Polish Złoty',
    RON: 'Romanian Leu',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    THB: 'Thai Baht',
    TRY: 'Turkish Lira',
    USD: 'United States Dollar',
    ZAR: 'South African Rand',
  },
  currencyInfo: {},
};

export default handleActions(
  {
    [currenciesFetch]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [currenciesFetchSuccess]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      currencies: payload,
    }),
    [currenciesFetchFail]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
  defaultState,
);
