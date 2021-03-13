import React from 'react'
import OtherLangExample from './other-lang-example'

const RequestItem = (props) => {
  return (
    <div className="request-item">
      <p>{props.term}</p>
      <div className="request-item__langs-wrapper">
        <p>{props.description}</p>
        {props.other_lang_examples.map((t, i) => <OtherLangExample key={i} {...t}/>)}
      </div>
    </div>
  )
}

export default RequestItem