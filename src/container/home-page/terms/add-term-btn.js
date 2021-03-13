import React from 'react'
import { useHistory } from "react-router-dom";

const AddTermBtn = (props) => {
  const history = useHistory()
  const clickHandler = () => history.push("/add-term")
  return (
    <button onClick={clickHandler}>Жаңы</button>
  )
}

export default AddTermBtn