import React from 'react'
import { useHistory } from 'react-router-dom'

const TranslationSuggestion = (props) => {
  const history = useHistory()
  return (
    <div className="terms-translation-suggestion" onClick={() => history.push('/suggestion/'+props.id)}>
      <span>{props.translation}</span>
      <span>Автор: {props.author}</span>
    </div>
  )
}

export default TranslationSuggestion