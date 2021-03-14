export const REQUESTS_REQUEST = '[HOME] REQUESTS REQUEST'
export const REQUESTS_SUCCESS = '[HOME] REQUESTS SUCCESS'
export const REQUESTS_ERROR = '[HOME] REQUESTS ERROR'

export const ADD_TERM_REQUEST = '[ADD-TERM] ADD TERM REQUEST'
export const ADD_TERM_SUCCESS = '[ADD-TERM] ADD TERM SUCCESS'
export const ADD_TERM_ERROR = '[ADD-TERM] ADD TERM ERROR'

export const GET_TERM_REQUEST = '[GET-TERM] GET TERM REQUEST'
export const GET_TERM_SUCCESS = '[GET-TERM] GET TERM SUCCESS'
export const GET_TERM_ERROR = '[GET-TERM] GET TERM ERROR'

export const GET_SUGGESTION_REQUEST = '[SUGGESTION] GET SUGGESTION REQUEST'
export const GET_SUGGESTION_SUCCESS = '[SUGGESTION] GET SUGGESTION SUCCESS'
export const GET_SUGGESTION_ERROR = '[SUGGESTION] GET SUGGESTION ERROR'

export const requestsRequest = () => ({ type: REQUESTS_REQUEST })
export const requestsSuccess = ({ data }) => ({ type: REQUESTS_SUCCESS, data })
export const requestsError = (error) => ({ type: REQUESTS_ERROR, error })

export const addTermRequest = (formData) => ({ type: ADD_TERM_REQUEST, ...formData })
export const addTermSuccess = ({ data }) => ({ type: ADD_TERM_SUCCESS, data })
export const addTermError = (error) => ({ type: ADD_TERM_ERROR, error })

export const getTermRequest = (id) => ({ type: GET_TERM_REQUEST, id })
export const getTermSuccess = ({ data }) => ({ type: GET_TERM_SUCCESS, data })
export const getTermError = (error) => ({ type: GET_TERM_ERROR, error })

export const getSuggestionRequest = (id) => ({ type: GET_SUGGESTION_REQUEST, id })
export const getSuggestionSuccess = ({ data }) => ({ type: GET_SUGGESTION_SUCCESS, data })
export const getSuggestionError = (error) => ({ type: GET_SUGGESTION_ERROR, error })