const DATA_STATUS = {
  NOT_TOUCHED: 'NOT_TOUCHED',
  REQUESTED: 'REQUESTED',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

const isNotTouchedStatus = (status) => status === DATA_STATUS.NOT_TOUCHED
const isRequestedStatus = (status) => status === DATA_STATUS.REQUESTED
const isSuccessStatus = (status) => status === DATA_STATUS.SUCCESS
const isErrorStatus = (status) => status === DATA_STATUS.ERROR

export {
  DATA_STATUS,
  isNotTouchedStatus,
  isRequestedStatus,
  isSuccessStatus,
  isErrorStatus
}