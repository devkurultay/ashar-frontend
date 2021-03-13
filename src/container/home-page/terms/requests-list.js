import React from 'react'
import RequestItem from './request-item'

const RequestsList = (props) => {
  const requests = props.requests || []
  return (
    <>
      {requests.map((term, i) =>
        <RequestItem
          {...term}
          key={i}
        />
      )}
    </>
  )
}

export default RequestsList