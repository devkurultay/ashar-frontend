import React from 'react'
import RequestItem from './request-item'
import CardContent from '../../../component/card/card-content'

import '../style.css'

const RequestsList = (props) => {
  const requests = props.requests || []
  return (
    <CardContent className="request-list">
      <h3 className="request-list__title">Котормосу жоктор</h3>
      {requests.map((term, i) =>
        <RequestItem
          {...term}
          key={i}
        />
      )}
    </CardContent>
  )
}

export default RequestsList