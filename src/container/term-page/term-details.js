import React from 'react'
import OtherLangExample from '../common/other-lang-example'
import TranslationSuggestion from '../common/translation-suggestion'
import Card from '../../component/card/card'
import CardContent from '../../component/card/card-content'

import './style.css'

const TermDetails = (props) => {
  const requests = props.requests || []
  const termObj = requests.filter(r => r.id === Number(props.id))?.[0] || {}
  if (termObj && Object.keys(termObj).length) {
    const { term, description, other_lang_examples, translation_suggestions } = termObj
    return (
      <Card className="term-details">
        <CardContent className="term-details__inner">
          <h1 className="term-details__title">{term}</h1>
          {other_lang_examples?.length && other_lang_examples.map(
            (t, i) => <OtherLangExample key={i} {...t}/>
          )}
          <p>{description}</p>
          {translation_suggestions?.length ? <>
            <h3 className="request-list__title">Сунушталган котормолор</h3>
            {translation_suggestions.map(
              (s, i) => <TranslationSuggestion key={i} {...s} />
            )}
          </> : null}
        </CardContent>
      </Card>
    )
  }
  return <div>Error</div>
}

export default TermDetails