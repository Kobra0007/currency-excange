import { call, put, takeEvery } from 'redux-saga/effects'

import { getShowById } from './helpers/api'

import {
  showFetchById,
  showFetchByIdFail,
  showFetchByIdSuccess,
} from '../actions/show'

function* fetchShowData({ payload }) {
  try {
    const res = yield call(getShowById, payload)
    yield put(showFetchByIdSuccess(res))
  } catch (response) {
    yield put(showFetchByIdFail(response.error))
  }
}

export default function* governmentSaga() {
  yield takeEvery(showFetchById.toString(), fetchShowData)
}
