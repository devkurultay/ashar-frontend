import React from 'react'

const TranslationSuggestion = (props) => {
  return (
    <div className="terms-translation-suggestion">
      <span>{props.translation}</span>
      <span>Автор: {props.author}</span>
    </div>
  )
}

export default TranslationSuggestion