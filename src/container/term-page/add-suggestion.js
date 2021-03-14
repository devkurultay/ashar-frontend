import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Field, Form } from 'formik'
import { usePrevious } from '../../utils'
import { addSuggestionRequest, getTermRequest } from '../home-page/actions'
import { isRequestedStatus, isSuccessStatus } from '../../consts/data-status'
import Card from '../../component/card/card'
import CardContent from '../../component/card/card-content'
import FormInput from '../../component/form-input/form-input'
import Button from '../../component/button/button'
import * as Yup from 'yup'

import '../home-page/style.css'

const formValidation = Yup.object().shape(
  {
    suggested_translation: Yup.string(),
    term_id: Yup.string(),
  }
)

const AddSuggestion = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { term_id } = useParams()
  const { getSuggestionStatus, requests } = useSelector(state => state.home)
  const prevGetSuggestionStatus = usePrevious(getSuggestionStatus)

  useEffect(() => {
    dispatch(getTermRequest(term_id))
    if (isRequestedStatus(prevGetSuggestionStatus) && isSuccessStatus(getSuggestionStatus)) {
      history.push('/term/' + term_id)
    }
  }, [prevGetSuggestionStatus, getSuggestionStatus, history, term_id])

  const termObj = requests.length ? requests.filter(r => r.id === Number(term_id))?.[0] : {}
  const title = termObj?.term?.length ? `"${termObj.term}" боюнча жаңы котормо` : 'Жаңы котормо'
  return (
    <Card className="add-term">
      <CardContent className="add-term__inner">
        <h3 className="request-list__title">{title}</h3>
        <Formik
          initialValues={{
            suggested_translation: '',
            term_id: term_id,
          }}
          onSubmit={(values) => dispatch(addSuggestionRequest(values))}
          enableReinitialize={true}
          validationSchema={formValidation}
        >
          <Form className="add-term__form">
            <div className="add-term__form__textarea">
              <Field
                type="textarea"
                id="suggested_translation"
                name="suggested_translation"
                height="50px"
                width="250px"
                component={FormInput}
                label="Сунушталган котормо:"
                placeholder="Сунушуңуз"
              />
            </div>
            <div className="add-transfer-popup__body__btn">
              <Button primary type='submit'>Жөнөт</Button>
            </div>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  )
}

export default AddSuggestion