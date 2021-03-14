import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSuggestionRequest } from '../actions'
import { usePrevious } from '../../../utils'
import { isNotTouchedStatus, isRequestedStatus, isSuccessStatus } from '../../../consts/data-status'
import Comment from './comment'

const TranslationSuggestionDetails = () => {
  const [ ready, setReady ] = useState(false)
  const { id } = useParams()
  const dispatch = useDispatch()

  const { translationSuggestions, getSuggestionStatus } = useSelector(state => state.home)

  const prevGetSuggestionStatusStatus = usePrevious(getSuggestionStatus)

  useEffect(() => {
    dispatch(getSuggestionRequest(id))
    const requested = isNotTouchedStatus(prevGetSuggestionStatusStatus) || isRequestedStatus(prevGetSuggestionStatusStatus)
    if (requested && isSuccessStatus(getSuggestionStatus)) {
      setReady(true)
    }
  }, [dispatch, id, prevGetSuggestionStatusStatus, getSuggestionStatus])

  const suggestion = ready
    ? translationSuggestions.filter(r => r.id === Number(id))?.[0]
    : {}
  
  if (suggestion && Object.keys(suggestion).length) {
    return (
      <>
        <div>{suggestion.translation}</div>
        {suggestion?.comments?.length ? <>
          <p>Комментарийлер</p>
          {suggestion.comments.map(c => <Comment key={c.id} {...c}/>)}
        </> : null}
      </>
    )
  }
  return <div>Loading...</div>
}

export default TranslationSuggestionDetails