import { call, put, takeEvery } from 'redux-saga/effects'

import { getEpisodes, getEpisodeById } from './helpers/api'

import {
  episodesFetch,
  episodesFetchFail,
  episodesFetchSuccess,
  episodeFetchById,
  episodeFetchByIdFail,
  episodeFetchByIdSuccess,
} from '../actions/episode'

function* fetchEpisodeData({ payload }) {
  try {
    const res = yield call(getEpisodeById, payload)
    yield put(episodeFetchByIdSuccess(res))
  } catch (response) {
    yield put(episodeFetchByIdFail(response.error))
  }
}

function* fetchEpisodes({ payload }) {
  try {
    const res = yield call(getEpisodes, payload)
    yield put(episodesFetchSuccess(res))
  } catch (response) {
    yield put(episodesFetchFail(response.error))
  }
}

export default function* governmentSaga() {
  yield takeEvery(episodeFetchById.toString(), fetchEpisodeData)
  yield takeEvery(episodesFetch.toString(), fetchEpisodes)
}
