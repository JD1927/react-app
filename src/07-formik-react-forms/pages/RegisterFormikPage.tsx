import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import * as Yup from 'yup';
import '../styles/styles.css';

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={
          Yup.object({
            name: Yup
              .string()
              .min(2, 'Must be at least 2 characters')
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            email: Yup
              .string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup
              .string()
              .min(6, 'Must be at least 6 characters')
              .required('Required'),
            confirmPassword: Yup
              .string()
              .oneOf([Yup.ref('password')], 'Passwords must match')
              .required('Required')
          })
        }>
        {
          ({handleReset}) => (
            <Form>
              <MyTextInput
                label="Name"
                name="name"
                placeholder="John Doe"
              />
              <MyTextInput
                label="Email address"
                name="email"
                placeholder="john_doe@domain.com"
                type="email"
              />
              <MyTextInput
                label="Password"
                name="password"
                placeholder="******"
                type="password"
              />
              <MyTextInput
                label="Confirm password"
                name="confirmPassword"
                placeholder="******"
                type="password"
              />
              <button type="submit">CREATE</button>
              <button type="button" onClick={handleReset}>RESET</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
