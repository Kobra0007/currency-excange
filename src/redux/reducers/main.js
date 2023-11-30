import { handleActions } from 'redux-actions';

import {
  currenciesFetch,
  currenciesFetchFail,
  currenciesFetchSuccess,
  conversionFetch,
  conversionFetchFail,
  conversionFetchSuccess,
} from '../actions/main';

export const defaultState = {
  error: null,
  isLoading: false,
  isLoadingConversion: false,
  currencies: {},
  currencyInfo: {},
  conversionInfo: {},
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

    [conversionFetch]: (state) => ({
      ...state,
      isLoadingConversion: true,
    }),
    [conversionFetchSuccess]: (state, { payload }) => ({
      ...state,
      isLoadingConversion: false,
      conversionInfo: payload,
    }),
    [conversionFetchFail]: (state, { payload }) => ({
      ...state,
      isLoadingConversion: false,
      error: payload,
    }),
  },
  defaultState,
);
