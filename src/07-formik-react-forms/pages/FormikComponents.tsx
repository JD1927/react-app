import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponentsPage = () => {
  return (
    <div>
      <h1>Formik Components Tutorial</h1>
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
              <label htmlFor="firstName">First name</label>
              <Field name="firstName" type="text" placeholder="Type your first"/>
              <ErrorMessage name="firstName" component={"span"}/>

              <label htmlFor="lastName">Last name</label>
              <Field name="lastName" type="text"/>
              <ErrorMessage name="lastName" component={"span"}/>

              <label htmlFor="email">Email</label>
              <Field name="email" type="email"/>
              <ErrorMessage name="email" component={"span"}/>

              <label htmlFor="jobType">Job Type</label>
              <Field name="jobType" as="select">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="senior">Senior</option>
                <option value="junior">Junior</option>
              </Field>
              <ErrorMessage name="jobType" component={"span"}/>

              <label>
                <Field name="terms" type="checkbox"/>
                Terms & Conditions
              </label>
              <ErrorMessage name="terms" component={"span"}/>

              <button type="submit">SUBMIT</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
