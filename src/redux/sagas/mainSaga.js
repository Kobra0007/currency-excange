import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { getAllCurrencies, getConversionRate } from './helpers/api';

import {
  currenciesFetch,
  currenciesFetchFail,
  currenciesFetchSuccess,
  conversionFetch,
  conversionFetchFail,
  conversionFetchSuccess,
} from '../actions/main';

function* fetchCurrencies() {
  try {
    const res = yield call(getAllCurrencies);
    yield put(currenciesFetchSuccess(res));
  } catch (response) {
    yield put(currenciesFetchFail(response.error));
  }
}

function* fetchConversion({ payload }) {
  try {
    const res = yield call(getConversionRate, payload);
    yield put(conversionFetchSuccess(res));
  } catch (response) {
    yield put(conversionFetchFail(response.error));
  }
}

export default function* mainSaga() {
  yield takeEvery(currenciesFetch.toString(), fetchCurrencies);
  yield takeLatest(conversionFetch.toString(), fetchConversion);
}
