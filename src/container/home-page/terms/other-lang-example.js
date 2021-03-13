import React from 'react'

const OtherLangExample = (props) => {
  return (
    <div className="terms-other-lang-example">
      <span className="terms-other-lang-example__lang">{props.lang}: </span>
      <span> {props.value}</span>
    </div>
  )
}

export default OtherLangExample