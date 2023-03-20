import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstrictionPage = () => {
  return (
    <div>
      <h1>Formik Abstriction Tutorial</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={
          Yup.object({
            firstName: Yup
              .string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup
              .string()
              .max(10, 'Must be 10 characters or less')
              .required('Required'),
            email: Yup
              .string()
              .email('Invalid email address')
              .required('Required'),
            terms: Yup
              .boolean()
              .oneOf([true], 'You must accept the terms & conditions'),
            jobType: Yup
              .string()
              .notOneOf(['junior'], 'This option is not longer allowed')
              .required('Required'),
          })
        }>
        {
          (formik) => (
            <Form>
              <MyTextInput
                label="First name"
                name="firstName"
                placeholder="Type your first name..."
              />
              <MyTextInput
                label="Last name"
                name="lastName"
                placeholder="Type your last name..."
              />
              <MyTextInput
                label="Email address"
                name="email"
                placeholder="Type your email..."
                type="email"
              />

              <MySelect label="Job Type" name="jobType">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="senior">Senior</option>
                <option value="junior">Junior</option>
              </MySelect>

              <label>
                <Field name="terms" type="checkbox" />
                Terms & Conditions
              </label>
              <ErrorMessage name="terms" component={"span"} />

              <button type="submit">SUBMIT</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
