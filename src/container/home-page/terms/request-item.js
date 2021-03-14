import React from 'react'
import { useHistory } from "react-router-dom"
import OtherLangExample from '../../common/other-lang-example'
import CardContent from '../../../component/card/card-content'

import '../style.css'

const RequestItem = (props) => {
  console.log(props)
  const history = useHistory()
  return (
    <CardContent noBackground noPadding className="request-item">
      <div className="request-item__content" onClick={() => history.push('/term/'+props.id)}>
        <p>{props.term}</p>
        <CardContent className="request-item__langs-wrapper">
          {props.other_language_examples.map((t, i) => <OtherLangExample key={i} {...t}/>)}
        </CardContent>
      </div>
      <img src="/bookmark.svg" alt="bookmark"/>
    </CardContent>
  )
}

export default RequestItem