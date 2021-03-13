import React from 'react'
import RequestItem from './request-item'

const RequestsList = (props) => {
  const requests = props.requests || []
  return (
    <div>
      {requests.map((term, i) =>
        <RequestItem
          {...term}
          key={i}
        />
      )}
    </div>
  )
}

export default RequestsList