import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import OtherLangExample from './other-lang-example'
import TranslationSuggestion from './translation-suggestions'

const TermDetails = () => {
  const { id } = useParams()
  const { requests } = useSelector(state => state.home)
  const termObj = requests.filter(r => r.id === Number(id))?.[0]
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

export default TermDetails