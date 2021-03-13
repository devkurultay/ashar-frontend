import React from 'react'

const TermsItem = (props) => {
  console.log(props)
  return (
    <div className="terms-item">
      <p>{props.term}</p>
      <div className="terms-item__langs-wrapper">
        {props.translations_in_other_langs.map((t, i) => {
          const keys = Object.keys(t)
          const els = keys.map(k => {
            return <span>{k}: {t[k]}</span>
          })
          return <span>{els}</span>
        })}
      </div>
    </div>
  )
}

export default TermsItem