import React from 'react'
import { Formik, Field, Form } from 'formik'

const AddTerm = (props) => {
    return (
      <div className="add-term">
        <Formik
          initialValues={{
            term: '',
            ru: '',
            tr: '',
            en: ''
          }}
          onSubmit={(values, { setErrors }) => {
            console.log('!!!', values)
            // props.addTerm({})
          }}
        >
          <Form>
            <label htmlFor="term">Термин</label>
            <Field id="term" name="term" placeholder="Термин жазыңыз" />
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