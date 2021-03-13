import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

const json = () => [
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

export function* termsRequestWorker() {
  try {
    let result = yield call(json)
    yield put(actions.termsSuccess({
      data: result
    }))
  } catch (error) {
    yield put(actions.termsError())
  }
}

export function* termsRequestWatcher() {
  yield takeEvery(actions.TERMS_REQUEST, termsRequestWorker)
}