import React from 'react'

const TermsItem = (props) => {
  console.log(props)
  return (
    <div className="terms-item">
      <p>{props.term}</p>
      <p>{props.description}</p>
      <div className="terms-item__langs-wrapper">
        {props.other_lang_examples.map((t, i) => {
            return <span key={i}>{t.lang}: {t.value}</span>
        })}
      </div>
    </div>
  )
}

export default TermsItem