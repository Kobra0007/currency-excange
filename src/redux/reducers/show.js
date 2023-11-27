import { handleActions } from 'redux-actions'

import {
  showFetchById,
  showFetchByIdFail,
  showFetchByIdSuccess,
} from '../actions/show'

export const defaultState = {
  error: null,
  isLoading: false,
  showInfo: {},
}

export default handleActions(
  {
    [showFetchById]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [showFetchByIdSuccess]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      showInfo: payload,
    }),
    [showFetchByIdFail]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
  defaultState,
)
