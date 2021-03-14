import * as homeActions from './actions'
import { DATA_STATUS } from '../../consts/data-status'

const initialState = {
  requests: [],
  translationSuggestions: [],
  status: DATA_STATUS.NOT_TOUCHED,
  addTermStatus: DATA_STATUS.NOT_TOUCHED,
  getSuggestionStatus: DATA_STATUS.NOT_TOUCHED,
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
    case homeActions.GET_SUGGESTION_REQUEST:
      return {
        ...state,
        getSuggestionStatus: DATA_STATUS.REQUESTED
      }
    case homeActions.GET_SUGGESTION_SUCCESS:
      return {
        ...state,
        translationSuggestions: [...state.translationSuggestions, action.data],
        getSuggestionStatus: DATA_STATUS.SUCCESS
      }
    case homeActions.GET_SUGGESTION_ERROR:
      return {
        ...state,
        getSuggestionStatus: DATA_STATUS.ERROR,
        error: action.error
      }
    default:
      return state
  }
}

export default homeReducer