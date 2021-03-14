import { all, fork } from 'redux-saga/effects'
import {
  addTermRequestWatcher,
  getSuggestionRequestWatcher,
  getTermRequestWatcher,
  requestsRequestWatcher,
} from './container/home-page/saga'

export default function* rootSaga() {
  yield all([
    fork(requestsRequestWatcher),
    fork(addTermRequestWatcher),
    fork(getSuggestionRequestWatcher),
    fork(getTermRequestWatcher)
  ])
}