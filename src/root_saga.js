import { all, fork } from 'redux-saga/effects'
import {
  addTermRequestWatcher,
  requestsRequestWatcher,
} from './container/home-page/saga'

export default function* rootSaga() {
  yield all([
    fork(requestsRequestWatcher),
    fork(addTermRequestWatcher)
  ])
}