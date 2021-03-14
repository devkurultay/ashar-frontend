import React from 'react'
import FormInputGeneral from './form-input-general'

import './style.scss'

const FormInput = ({ field, form, ...props }) => {
  return (
    <FormInputGeneral field={field} form={form} {...props}>
      <input
        className="form-input__input"
        {...field}
        {...props}
        data-testid={field.name}
        style={{ height: props.height || "100%", width: props.width || "100%" }}
      />
    </FormInputGeneral>
  )
}

export default FormInput