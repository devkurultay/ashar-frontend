import React from 'react'
import OtherLangExample from './other-lang-example'

const TermsItem = (props) => {
  return (
    <div className="terms-item">
      <p>{props.term}</p>
      <p>{props.description}</p>
      <div className="terms-item__langs-wrapper">
        {props.other_lang_examples.map((t, i) => <OtherLangExample key={i} {...t}/>)}
      </div>
    </div>
  )
}

export default TermsItem