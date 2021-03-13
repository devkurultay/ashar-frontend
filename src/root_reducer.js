import { combineReducers } from 'redux'
import homeReducer from './container/home-page/reducer'

const rootReducer = combineReducers({
  home: homeReducer
})

export default rootReducer