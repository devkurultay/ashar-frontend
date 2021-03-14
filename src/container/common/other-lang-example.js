import React from 'react'

const OtherLangExample = (props) => {
  return (
    <div className="terms-other-lang-example">
      <span className="terms-other-lang-example__lang">{props.language}: </span>
      <span> {props.translation}</span>
    </div>
  )
}

export default OtherLangExample