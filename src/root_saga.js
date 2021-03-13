import { all, fork } from 'redux-saga/effects'
import {
  termsRequestWatcher,
} from './container/home-page/saga'

export default function* rootSaga() {
  yield all([
    fork(termsRequestWatcher)
  ])
}