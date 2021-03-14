import * as homeActions from './actions'
import { DATA_STATUS } from '../../consts/data-status'

const initialState = {
  requests: [],
  translationSuggestions: [],
  status: DATA_STATUS.NOT_TOUCHED,
  addTermStatus: DATA_STATUS.NOT_TOUCHED,
  getSuggestionStatus: DATA_STATUS.NOT_TOUCHED,
  addSuggestionStatus: DATA_STATUS.NOT_TOUCHED,
  getTermStatus: DATA_STATUS.NOT_TOUCHED,
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
    case homeActions.ADD_SUGGESTION_REQUEST:
      return {
        ...state,
        addSuggestionStatus: DATA_STATUS.REQUESTED
      }
    case homeActions.ADD_SUGGESTION_SUCCESS:
      const { term_id } = action.data
      let term = state.requests.filter(r => r.id === term_id)?.[0] || {}
      const suggestions = [...term?.translation_suggestions, action.data]
      term = { ...term, translation_suggestions: suggestions }
      const requests = [...state.requests, term]
      console.log('requests', requests)
      return {
        ...state,
        translationSuggestions: [...state.translationSuggestions, action.data],
        requests: requests,
        addSuggestionStatus: DATA_STATUS.SUCCESS
      }
    case homeActions.ADD_SUGGESTION_ERROR:
      return {
        ...state,
        addSuggestionStatus: DATA_STATUS.ERROR,
        error: action.error
      }
    case homeActions.GET_TERM_REQUEST:
      return {
        ...state,
        getTermStatus: DATA_STATUS.REQUESTED
      }
    case homeActions.GET_TERM_SUCCESS:
      return {
        ...state,
        requests: [...state.requests, action.data ],
        getTermStatus: DATA_STATUS.SUCCESS
      }
    case homeActions.GET_TERM_ERROR:
      return {
        ...state,
        getTermStatus: DATA_STATUS.ERROR,
        error: action.error
      }
    default:
      return state
  }
}

export default homeReducer