import React from 'react'
import TermsItem from './terms-item'

const TermsList = (props) => {
  const terms = props.terms || []
  return (
    <div>
      {terms.map((term, i) =>
        <TermsItem
          {...term}
          key={i}
        />
      )}
    </div>
  )
}

export default TermsList