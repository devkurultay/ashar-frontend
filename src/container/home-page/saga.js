import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

const json = () => [
  {
    "term": "CPU",
    "description": "Бул компьтердин негизги эсептөөчү бирдигинин аталышы.",
    "translations_in_other_langs": [{"ru": "ЦПУ"}, {"tr": "İşlemci"}, {"kk": "Орталық Есептеуіш Бөлім"}],
    "suggestions": [
      {"author": "murat", "translation": "борбордук эсептөөчү бөлүк"},
      {"author": "elza", "translation": "борбордук эсептөөчү бирдик"}]
  },
  {
    "term": "RAM",
    "description": "Бул компьтердин CPU'су менен тыгыз иштешкен эс тутум бөлүгү.",
    "translations_in_other_langs": [{"ru": "ОЗУ"}, {"tr": "Veri deposu"}, {"kk": "Жедел Жадтау Құрылғысы"}],
    "suggestions": [
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