export const REQUESTS_REQUEST = '[HOME] REQUESTS REQUEST'
export const REQUESTS_SUCCESS = '[HOME] REQUESTS SUCCESS'
export const REQUESTS_ERROR = '[HOME] REQUESTS ERROR'

export const ADD_TERM_REQUEST = '[ADD-TERM] ADD TERM REQUEST'
export const ADD_TERM_SUCCESS = '[ADD-TERM] ADD TERM SUCCESS'
export const ADD_TERM_ERROR = '[ADD-TERM] ADD TERM ERROR'

export const requestsRequest = () => ({ type: REQUESTS_REQUEST })
export const requestsSuccess = ({ data }) => ({ type: REQUESTS_SUCCESS, data })
export const requestsError = (error) => ({ type: REQUESTS_ERROR, error })

export const addTermRequest = (formData) => ({ type: ADD_TERM_REQUEST, ...formData })
export const addTermSuccess = ({ data }) => ({ type: ADD_TERM_SUCCESS, data })
export const addTermError = (error) => ({ type: ADD_TERM_ERROR, error })