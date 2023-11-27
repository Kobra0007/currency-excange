import { createActions } from 'redux-actions'

export const {
  episodesFetch,
  episodesFetchFail,
  episodesFetchSuccess,

  episodeFetchById,
  episodeFetchByIdFail,
  episodeFetchByIdSuccess,
} = createActions(
  'EPISODES_FETCH',
  'EPISODES_FETCH_FAIL',
  'EPISODES_FETCH_SUCCESS',

  'EPISODE_FETCH_BY_ID',
  'EPISODE_FETCH_BY_ID_FAIL',
  'EPISODE_FETCH_BY_ID_SUCCESS',
)
