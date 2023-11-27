import { fork } from 'redux-saga/effects'

import episode from './episodeSaga'
import show from './showSaga'

export default function* rootSaga() {
  yield fork(episode)
  yield fork(show)
}
