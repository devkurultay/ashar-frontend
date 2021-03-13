import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createReduxWaitForMiddleware from 'redux-wait-for-action'
import rootReducer from './root_reducer'
import rootSaga from './root_saga'

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware()
  const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(createReduxWaitForMiddleware())
  )
  const store = createStore(rootReducer, initialState, enhancer)
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
