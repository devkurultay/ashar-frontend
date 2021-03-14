import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getTermRequest } from '../actions'
import { usePrevious } from '../../../utils'
import { isNotTouchedStatus, isRequestedStatus, isSuccessStatus } from '../../../consts/data-status'
import OtherLangExample from './other-lang-example'
import TranslationSuggestion from './translation-suggestions'

const TermDetails = () => {
  const [ ready, setReady ] = useState(false)
  const dispatch = useDispatch()
  const { id } = useParams()
  const { requests, getTermStatus } = useSelector(state => state.home)
  const prevGetTermStatus = usePrevious(getTermStatus)

  useEffect(() => {
    dispatch(getTermRequest(id))
    const requested = isNotTouchedStatus(prevGetTermStatus) || isRequestedStatus(prevGetTermStatus)
    if (requested && isSuccessStatus(getTermStatus)) {
      setReady(true)
    }
  }, [dispatch, id, prevGetTermStatus, getTermStatus])

  const termObj = ready
    ? requests.filter(r => r.id === Number(id))?.[0]
    : {}
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