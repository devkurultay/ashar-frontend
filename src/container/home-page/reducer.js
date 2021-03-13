import * as homeActions from './actions'
import { DATA_STATUS } from '../../consts/data-status'

const initialState = {
  requests: [],
  addTermStatus: DATA_STATUS.NOT_TOUCHED,
  status: DATA_STATUS.NOT_TOUCHED,
  error: ''
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case homeActions.REQUESTS_REQUEST:
      return {
        ...state,
        status: DATA_STATUS.REQUESTED
      }
    case homeActions.REQUESTS_SUCCESS:
      return {
        ...state,
        requests: action.data,
        status: DATA_STATUS.SUCCESS
      }
    case homeActions.REQUESTS_ERROR:
      return {
        ...state,
        status: DATA_STATUS.ERROR,
        error: action.error
      }
    case homeActions.ADD_TERM_REQUEST:
      return {
        ...state,
        addTermStatus: DATA_STATUS.REQUESTED
      }
    case homeActions.ADD_TERM_SUCCESS:
      return {
        ...state,
        requests: [...state.requests, action.data ],
        addTermStatus: DATA_STATUS.SUCCESS
      }
    default:
      return state
  }
}

export default homeReducer