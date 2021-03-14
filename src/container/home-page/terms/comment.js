import React from 'react'

const Comment = (props) => {
  return (
    <div className="comment">
      <span>{props.text}</span>
      <span>Автор: {props.author}</span>
    </div>
  )
}

export default Comment