import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYupPage = () => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
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
    })
  });
  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
