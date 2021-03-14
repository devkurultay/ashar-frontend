import React from 'react'
import { useHistory } from "react-router-dom"
import OtherLangExample from '../../common/other-lang-example'

import '../style.css'
import CardContent from '../../../component/card/card-content'

const RequestItem = (props) => {
  const history = useHistory()
  return (
    <CardContent noBackground noPadding className="request-item" onClick={() => history.push('/term/'+props.id)}>
      <p>{props.term}</p>
      <CardContent className="request-item__langs-wrapper">
        {props.other_lang_examples.map((t, i) => <OtherLangExample key={i} {...t}/>)}
      </CardContent>
      <img src="/bookmark.svg" alt="bookmark"/>
    </CardContent>
  )
}

export default RequestItem