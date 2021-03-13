export const REQUESTS_REQUEST = '[HOME] REQUESTS REQUEST'
export const REQUESTS_SUCCESS = '[HOME] REQUESTS SUCCESS'
export const REQUESTS_ERROR = '[HOME] REQUESTS ERROR'

export const requestsRequest = () => ({ type: REQUESTS_REQUEST })
export const requestsSuccess = ({ data }) => ({ type: REQUESTS_SUCCESS, data })
export const requestsError = (error) => ({ type: REQUESTS_ERROR, error })