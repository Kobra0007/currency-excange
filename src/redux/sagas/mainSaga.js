import { call, put, takeEvery } from 'redux-saga/effects';

import { getAllCurrencies } from './helpers/api';

import {
  currenciesFetch,
  currenciesFetchFail,
  currenciesFetchSuccess,
  } from '../actions/main';



function* fetchCurrencies() {
  try {
    const res = yield call(getAllCurrencies);
    yield put(currenciesFetchSuccess(res));
  } catch (response) {
    yield put(currenciesFetchFail(response.error));
  }
}

export default function* mainSaga() {
  yield takeEvery(currenciesFetch.toString(), fetchCurrencies);
}
