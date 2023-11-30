import { fork } from 'redux-saga/effects';

import main from './mainSaga';
import currency from './currencySaga';

export default function* rootSaga() {
  yield fork(main);
  yield fork(currency);
}
