import React from 'react'
import classNames from 'classnames'

import './style.css'

const Button = props => {
  return (
    <button
      className={classNames({
        button: true,
        "button--primary": props.primary,
        "button--secondary": props.secondary,
        "button--white": props.white,
        ...(props.className && { [props.className]: true })
      })}
      disabled={props.disabled}
      type={props.type || "button"}
      style={{
        display: props.display || "initial",
        margin: props.margin || "0 auto",
        padding: props.padding || "auto",
        width: props.width ? "auto" : "",
        height: props.height ? "auto" : "",
        ...(props.style && props.style)
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
