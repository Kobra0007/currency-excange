import { handleActions } from 'redux-actions';

import {
  currencyFetchById,
  currencyFetchByIdFail,
  currencyFetchByIdSuccess,
} from '../actions/currency';

export const defaultState = {
  error: null,
  isLoading: false,
  currencyInfo: {},
};

export default handleActions(
  {
    [currencyFetchById]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [currencyFetchByIdSuccess]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      currencyInfo: payload,
    }),
    [currencyFetchByIdFail]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
  defaultState,
);
