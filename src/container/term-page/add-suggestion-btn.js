import React from 'react'
import { useHistory } from "react-router-dom"
import Button from '../../component/button/button'

import '../home-page/style.scss'

const AddSuggestionBtn = ({ termId }) => {
  const history = useHistory()
  const clickHandler = () => history.push('/add-suggestion/' + termId)
  return (
    <div className="home-page__btn">
      <Button primary onClick={clickHandler}>Жаңы котормо кош</Button>
    </div>
  )
}

export default AddSuggestionBtn