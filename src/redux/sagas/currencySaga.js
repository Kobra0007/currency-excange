import { call, put, takeEvery } from 'redux-saga/effects';

import { getHistoricalExchangeRate } from './helpers/api';

import {
  currencyFetchById,
  currencyFetchByIdFail,
  currencyFetchByIdSuccess,
} from '../actions/currency';

function* fetchCurrencyData({ payload }) {
  try {
    const res = yield call(getHistoricalExchangeRate, payload);
    yield put(currencyFetchByIdSuccess(res));
  } catch (response) {
    yield put(currencyFetchByIdFail(response.error));
  }
}

export default function* currencySaga() {
  yield takeEvery(currencyFetchById.toString(), fetchCurrencyData);
}
