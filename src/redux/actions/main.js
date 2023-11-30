import { createActions } from 'redux-actions';

export const {
  currenciesFetch,
  currenciesFetchFail,
  currenciesFetchSuccess,
} = createActions(
  'CURRENCIES_FETCH',
  'CURRENCIES_FETCH_FAIL',
  'CURRENCIES_FETCH_SUCCESS',
);
