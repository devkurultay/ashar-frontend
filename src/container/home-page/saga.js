import { call, put, takeEvery } from 'redux-saga/effects'
import { homePageApi } from '../../api/home-page-api'
import * as actions from './actions'

function* requestsRequestWorker() {
  try {
    let result = yield call(homePageApi.terms)
    yield put(actions.requestsSuccess({
      data: result
    }))
  } catch (error) {
    yield put(actions.requestsError())
  }
}

export function* requestsRequestWatcher() {
  yield takeEvery(actions.REQUESTS_REQUEST, requestsRequestWorker)
}

function* addTermRequestWorker({ term, description, ru, tr, en }) {
  const data = {
    term: term,
    description: description,
    category: 'midicin',
    other_lang_examples: [
      {language: "ru", translation: ru},
      {language: "tr", translation: tr},
      {language: "en", translation: en}
    ]
  }
  try {
    let result = yield call(homePageApi.addNewTerm, data)
    yield put(actions.addTermSuccess({
      data: result
    }))
  } catch (error) {
    yield put(actions.addTermError(error))
  }
}

export function* addTermRequestWatcher() {
  yield takeEvery(actions.ADD_TERM_REQUEST, addTermRequestWorker)
}

function* addSuggestionRequestWorker({ suggested_translation, term_id }) {
  const data = {
    suggested_translation,
    term_id
  }
  try {
    let result = yield call(homePageApi.addNewSuggestion, data)
    const toStore = {
      ...result.data, author: "eldosbolgombaev@gmail.com"
    }
    yield put(actions.addSuggestionSuccess({
      data: toStore
    }))
  } catch (error) {
    yield put(actions.addSuggestionError(error))
  }
}

export function* addSuggestionRequestWatcher() {
  yield takeEvery(actions.ADD_SUGGESTION_REQUEST, addSuggestionRequestWorker)
}

function* getTermRequestWorker({ id }) {
  try {
    let result = yield call(homePageApi.getTerm, id)
    yield put(actions.getTermSuccess({
      data: result
    }))
  } catch (error) {
    yield put(actions.getTermError(error))
  }
}

export function* getTermRequestWatcher() {
  yield takeEvery(actions.GET_TERM_REQUEST, getTermRequestWorker)
}

function* getSuggestionRequestWorker({ id }) {
  const someGetRequest = (id) => ({
    id: Number(id), author: "murat",
    translation: "?????????????????????? ?????????????? ??????????????",
    comments: [
      {id: 1, author: 'user1', text: 'lorem ipsum dolor'},
      {id: 2, author: 'user2', text: 'ipsum dolor amet'},
    ]
  })
  try {
    let result = yield call(someGetRequest, id)
    yield put(actions.getSuggestionSuccess({
      data: result
    }))
  } catch (error) {
    yield put(actions.getSuggestionError(error))
  }
}

export function* getSuggestionRequestWatcher() {
  yield takeEvery(actions.GET_SUGGESTION_REQUEST, getSuggestionRequestWorker)
}