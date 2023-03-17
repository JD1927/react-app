import { useFormik } from 'formik';

import '../styles/styles.css';

export const FormikBasicPage = () => {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
        />
        <span>First name required</span>
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
        />
        <span>First name required</span>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <span>Email name required</span>
        <span>Invalid email format</span>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
