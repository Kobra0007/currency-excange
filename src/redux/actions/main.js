import { createActions } from 'redux-actions';

export const {
  currenciesFetch,
  currenciesFetchFail,
  currenciesFetchSuccess,

  conversionFetch,
  conversionFetchFail,
  conversionFetchSuccess,
} = createActions(
  'CURRENCIES_FETCH',
  'CURRENCIES_FETCH_FAIL',
  'CURRENCIES_FETCH_SUCCESS',

  'CONVERSION_FETCH',
  'CONVERSION_FETCH_FAIL',
  'CONVERSION_FETCH_SUCCESS',
);
