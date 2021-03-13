import * as homeActions from './actions'
import { DATA_STATUS } from '../../consts/data-status'

const initialState = {
  terms: [],
  status: DATA_STATUS.NOT_TOUCHED,
  error: ''
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case homeActions.TERMS_REQUEST:
      return {
        ...state,
        status: DATA_STATUS.REQUESTED
      }
    case homeActions.TERMS_SUCCESS:
      return {
        ...state,
        terms: action.data,
        status: DATA_STATUS.SUCCESS
      }
    case homeActions.TERMS_ERROR:
      return {
        ...state,
        status: DATA_STATUS.ERROR,
        error: action.error
      }

    default:
      return state
  }
}

export default homeReducer