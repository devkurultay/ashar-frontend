import React from 'react'
import { useHistory } from "react-router-dom"
import Button from '../../../component/button/button'

import '../style.css'

const AddTermBtn = () => {
  const history = useHistory()
  const clickHandler = () => history.push("/add-term")
  return (
    <div className="home-page__btn">
      <Button primary onClick={clickHandler} >Которуу өтүнүчүн кош</Button>
    </div>
  )
}

export default AddTermBtn