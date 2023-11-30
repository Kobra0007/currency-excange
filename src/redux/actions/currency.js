import { createActions } from 'redux-actions';

export const { currencyFetchById, currencyFetchByIdFail, currencyFetchByIdSuccess } =
  createActions(
    'CURRENCY_FETCH_BY_ID',
    'CURRENCY_FETCH_BY_ID_FAIL',
    'CURRENCY_FETCH_BY_ID_SUCCESS',
  );
