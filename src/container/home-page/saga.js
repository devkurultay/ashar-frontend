import { call, put, takeEvery } from 'redux-saga/effects'
import { homePageApi } from '../../api/home-page-api'
import * as actions from './actions'

const fixture = () => [
  {
    "id": 1,
    "term": "CPU",
    "description": "Бул компьтердин негизги эсептөөчү бирдигинин аталышы.",
    "other_lang_examples": [
        {"lang": "ru", "value": "ЦПУ"},
        {"lang": "tr", "value": "İşlemci"},
        {"lang": "kk", "value": "Орталық Есептеуіш Бөлім"}],
    "translation_suggestions": [
      {"id": 1, "author": "murat", "translation": "борбордук эсептөөчү бөлүк"},
      {"id": 2, "author": "elza", "translation": "борбордук эсептөөчү бирдик"}]
  },
  {
    "id": 2,
    "term": "RAM",
    "description": "Бул компьтердин CPU'су менен тыгыз иштешкен эс тутум бөлүгү.",
    "other_lang_examples": [
        {"lang": "ru", "value": "ОЗУ"},
        {"lang": "tr", "value": "Veri deposu"},
        {"lang": "kk", "value": "Жедел Жадтау Құрылғысы"}],
    "translation_suggestions": [
      {"id": 1, "author": "murat", "translation": "оперативдик эстутум түзмөгү"},
      {"id": 2, "author": "elza", "translation": "ыкчам эстутум түзмөгү"}]
  },
  {
    "id": 3,
    "term": "Lorem",
    "description": "Some data .",
    "other_lang_examples": [
        {"lang": "ru", "value": "ЦПУ"},
        {"lang": "tr", "value": "İşlemci"}],
    "translation_suggestions": []
  },
  {
    "id": 4,
    "term": "Ipsum",
    "description": "Some other descr.",
    "other_lang_examples": [
        {"lang": "ru", "value": "ОЗУ"}],
    "translation_suggestions": []
  },
]

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
    category: 'aviaica',
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

function* getTermRequestWorker({ id }) {
  const someGetRequest = (id) => ({
    id: Number(id),
    term: "CPU",
    description: "Бул компьтердин негизги эсептөөчү бирдигинин аталышы.",
    other_lang_examples: [
        {"lang": "ru", "value": "ЦПУ"},
        {"lang": "tr", "value": "İşlemci"},
        {"lang": "kk", "value": "Орталық Есептеуіш Бөлім"}]
  })
  try {
    let result = yield call(someGetRequest, id)
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
    translation: "оперативдик эстутум түзмөгү",
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