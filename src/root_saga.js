import { all, fork } from 'redux-saga/effects'
import {
  addTermRequestWatcher,
  addSuggestionRequestWatcher,
  getSuggestionRequestWatcher,
  getTermRequestWatcher,
  requestsRequestWatcher,
} from './container/home-page/saga'

export default function* rootSaga() {
  yield all([
    fork(requestsRequestWatcher),
    fork(addTermRequestWatcher),
    fork(addSuggestionRequestWatcher),
    fork(getSuggestionRequestWatcher),
    fork(getTermRequestWatcher)
  ])
}