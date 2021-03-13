import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

const fixture = () => [
  {
    "term": "CPU",
    "description": "Бул компьтердин негизги эсептөөчү бирдигинин аталышы.",
    "other_lang_examples": [
        {"lang": "ru", "value": "ЦПУ"},
        {"lang": "tr", "value": "İşlemci"},
        {"lang": "kk", "value": "Орталық Есептеуіш Бөлім"}],
    "translation_suggestions": [
      {"author": "murat", "translation": "борбордук эсептөөчү бөлүк"},
      {"author": "elza", "translation": "борбордук эсептөөчү бирдик"}]
  },
  {
    "term": "RAM",
    "description": "Бул компьтердин CPU'су менен тыгыз иштешкен эс тутум бөлүгү.",
    "other_lang_examples": [
        {"lang": "ru", "value": "ОЗУ"},
        {"lang": "tr", "value": "Veri deposu"},
        {"lang": "kk", "value": "Жедел Жадтау Құрылғысы"}],
    "translation_suggestions": [
      {"author": "murat", "translation": "оперативдик эстутум түзмөгү"},
      {"author": "elza", "translation": "ыкчам эстутум түзмөгү"}]
  },
]

function* requestsRequestWorker() {
  try {
    let result = yield call(fixture)
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
    other_lang_examples: [
      {lang: "ru", value: ru},
      {lang: "tr", value: tr},
      {lang: "en", value: en}
    ]
  }
  // TODO: remove this
  const somePostRequest = d => d
  try {
    let result = yield call(somePostRequest, data)
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