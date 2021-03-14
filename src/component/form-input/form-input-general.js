import React from 'react'
import classNames from 'classnames'

import './style.scss'

const FormInputGeneral = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <div className="form-input-wrapper">
      {props.label && <label>{props.label}</label>}
      <div
        className={classNames({
          'form-input': true,
          'form-input--error': touched[field.name] && errors[field.name]
        })}
      >
        {props.children}
      </div>
      {touched[field.name] && (errors[field.name] || props.supportingField) && (
        <div className="form-input__error" data-testid={`${field.name}-error`}>
          {errors[field.name] || errors[props.supportingField]}
        </div>
      )}
    </div>
  )
}

export default FormInputGeneral