import * as homeActions from './actions'
import { DATA_STATUS } from '../../consts/data-status'

const initialState = {
  requests: [],
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

    default:
      return state
  }
}

export default homeReducer