import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Field, Form } from 'formik'
import { usePrevious } from '../../../utils'
import { addTermRequest } from '../actions'
import { isRequestedStatus, isSuccessStatus } from '../../../consts/data-status'
import Card from '../../../component/card/card'
import CardContent from '../../../component/card/card-content'
import FormInput from '../../../component/form-input/form-input'
import Button from '../../../component/button/button'
import * as Yup from 'yup'

import '../style.css'

const formValidation = Yup.object().shape(
  {
    term: Yup.string(),
    description: Yup.string(),
    ru: Yup.string(),
    tr: Yup.string(),
    en: Yup.string()
  }
)

const AddTerm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { addTermStatus } = useSelector(state => state.home)
  const prevTermStatus = usePrevious(addTermStatus)

  useEffect(() => {
    if (isRequestedStatus(prevTermStatus) && isSuccessStatus(addTermStatus)) {
      history.push('/')
    }
  }, [prevTermStatus, addTermStatus, history])

  return (
    <Card className="add-term">
      <CardContent className="add-term__inner">
        <h3 className="request-list__title">Термин которуу өтүнүчү</h3>
        <Formik
          initialValues={{
            term: '',
            description: '',
            ru: '',
            tr: '',
            en: ''
          }}
          onSubmit={(values) => dispatch(addTermRequest(values))}
          enableReinitialize={true}
          validationSchema={formValidation}
          // onSubmit={(values, { setErrors }) => {
          //   props.createRevenue({
          //     term: values.term,
          //     description: values.description,
          //     ru: values.ru,
          //     tr: values.tr,
          //     en: values.en,
          //     setErrors })
          // }}
        >
          <Form className="add-term__form">
            <div className="add-term__form__textarea">
              <Field
                type="textarea"
                id="term"
                name="term"
                height="50px"
                width="250px"
                component={FormInput}
                label="Термин:"
                placeholder="Которулуучу термин"
              />
            </div>
            <div className="add-term__form__textarea">
              <Field
                type="textarea"
                id="description"
                name="description"
                height="40px"
                width="250px"
                component={FormInput}
                label="Сүрөттөмөсү:"
                placeholder="Термин тууралуу маалымат"
              />
            </div>
            <p>Башка тилдерден мисалдар:</p>
            <Field
              id="ru"
              name="ru"
              height="40px"
              width="195px"
              component={FormInput}
              label="Орусча:"
              placeholder="Орус тилинен мисал"
            />
            <Field
              id="tr"
              name="tr"
              height="40px"
              width="195px"
              component={FormInput}
              label="Түркчө:"
              placeholder="Түрк тилинен мисал"
            />
            <Field
              id="en"
              name="en"
              height="40px"
              width="195px"
              component={FormInput}
              label="Англисче:"
              placeholder="Англис тилинен мисал"
            />
            <div className="add-transfer-popup__body__btn">
              <Button primary type='submit'>Жөнөт</Button>
            </div>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  )
}

export default AddTerm