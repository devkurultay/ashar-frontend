import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Field, Form } from 'formik'
import { usePrevious } from '../../../utils'
import { addTermRequest } from '../actions'
import { isRequestedStatus, isSuccessStatus } from '../../../consts/data-status'

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
    <div className="add-term">
      <Formik
        initialValues={{
          term: '', description: '',
          ru: '', tr: '', en: ''
        }}
        onSubmit={(values) => dispatch(addTermRequest(values))}>
        <Form>
          <label htmlFor="term">Термин</label>
          <Field id="term" name="term" placeholder="Которулуучу термин" />
          <label htmlFor="description">Сүрөттөмөсү</label>
          <Field id="description" name="description" placeholder="Термин тууралуу маалымат" />
          <p>Башка тилдерден мисалдар:</p>
          <label htmlFor="ru">Орусча</label>
          <Field id="ru" name="ru" placeholder="Орус тилинен мисал" />
          <label htmlFor="tr">Түркчө</label>
          <Field id="tr" name="tr" placeholder="Түрк тилинен мисал" />
          <label htmlFor="en">Англисче</label>
          <Field id="en" name="en" placeholder="Англис тилинен мисал" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
  
export default AddTerm