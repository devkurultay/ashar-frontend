import React from 'react'
import OtherLangExample from '../common/other-lang-example'
import TranslationSuggestion from '../common/translation-suggestion'

const TermDetails = (props) => {
  const requests = props.requests || []
  const termObj = requests.filter(r => r.id === Number(props.id))?.[0] || {}
  if (termObj && Object.keys(termObj).length) {
    const { term, description, other_lang_examples, translation_suggestions } = termObj
    return (
      <div>
        <h1>{term}</h1>
        {other_lang_examples?.length && other_lang_examples.map(
          (t, i) => <OtherLangExample key={i} {...t}/>
        )}
        <p>{description}</p>
        {translation_suggestions?.length ? <>
          <p>Сунушталган котормолор</p>
          {translation_suggestions.map(
            (s, i) => <TranslationSuggestion key={i} {...s} />
          )}
        </> : null}
      </div>
    )
  }
  return <div>Error</div>
}

export default TermDetails