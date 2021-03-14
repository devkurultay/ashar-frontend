import React, { Fragment } from 'react'
import { Field, Form, Formik } from 'formik'
import FormInput from '../../component/form-input/form-input'
import Button from '../../component/button/button'
import * as Yup from 'yup'
import CardContent from '../../component/card/card-content'
import Card from '../../component/card/card'

import './style.scss'

const formValidation = Yup.object().shape(
  {
    password: Yup.string().required('Password is required').min(6, 'Too short').max(50, 'Too long')
  }
)

const Login = (props) => {
  return (
    <Card className='login'>
      <CardContent className="login__inner">
        <div className="login__inner__logo">
          <img src="/logo.svg" className="login__inner__logo__img" alt='logo'/>
          <div className="login__inner__logo__title">Ashar.App</div>
        </div>
        <Formik
          initialValues={{
            login: '',
            password: ''
          }}
          validationSchema={formValidation}
          onSubmit={(values, { setErrors }) => {
            props.login({ login: values.login, password: values.password, setErrors })
          }}
        >
          {() => {
            return (
              <Fragment>
                <Form className='login__inner__form'>
                  <Field
                    type="login"
                    name="login"
                    height="50px"
                    component={FormInput}
                    placeholder="Логин"
                  />
                    <Field
                      type="password"
                      name="password"
                      height="50px"
                      component={FormInput}
                      placeholder="Пароль"
                    />
                    <Button primary type='submit' fullWidthOnMobile>Кирүү</Button>
                </Form>
                <div onClick={props.resetPassword} type='button'
                        className='login__inner__forgot-password'>
                  Парольду унуттуңузбу?
                </div>
              </Fragment>
            )
          }}
        </Formik>
      </CardContent>
    </Card>
  )
}

export default Login