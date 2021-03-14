import React from 'react'
import { useHistory } from 'react-router-dom'
import CardContent from '../../component/card/card-content'

import './style.css'

const TranslationSuggestion = (props) => {
  const history = useHistory()
  return (
    <CardContent className="terms-translation-suggestion" onClick={() => history.push('/suggestion/'+props.id)}>
      <div className="terms-translation-suggestion__content">
        <span className="terms-translation-suggestion__content__translation">{props.translation}</span>
        <span className="terms-translation-suggestion__content__author"><span>Автор: </span>{props.author}</span>
      </div>
      <div className="terms-translation-suggestion__icons">
        <div className="terms-translation-suggestion__icons__comment">
          <img src="/chat-left-text.svg" alt="chat-left-text"/>
          <span>0</span>
        </div>
        <div className="terms-translation-suggestion__icons__like">
          <img src="/hand-thumbs-up.svg" alt="hand-thumbs-up"/>
          <span>0</span>
        </div>
      </div>
    </CardContent>
  )
}

export default TranslationSuggestion