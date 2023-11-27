import { handleActions } from 'redux-actions'

import {
  episodesFetch,
  episodesFetchFail,
  episodesFetchSuccess,
  episodeFetchById,
  episodeFetchByIdFail,
  episodeFetchByIdSuccess,
} from '../actions/episode'

export const defaultState = {
  error: null,
  isLoading: false,
  episodes: [],
  episodeInfo: {},
}

export default handleActions(
  {
    [episodesFetch]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [episodesFetchSuccess]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      episodes: payload,
    }),
    [episodesFetchFail]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),

    [episodeFetchById]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [episodeFetchByIdSuccess]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      episodeInfo: payload,
    }),
    [episodeFetchByIdFail]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
  defaultState,
)
