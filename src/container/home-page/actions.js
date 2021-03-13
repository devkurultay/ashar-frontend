export const TERMS_REQUEST = '[HOME] TERMS REQUEST'
export const TERMS_SUCCESS = '[HOME] TERMS SUCCESS'
export const TERMS_ERROR = '[HOME] TERMS ERROR'

export const termsRequest = () => ({ type: TERMS_REQUEST })
export const termsSuccess = ({ data }) => ({ type: TERMS_SUCCESS, data })
export const termsError = (error) => ({ type: TERMS_ERROR, error })