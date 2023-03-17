import '../styles/styles.css';

export const FormikBasicPage = () => {
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form noValidate>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
        />
        <span>First name required</span>
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
        />
        <span>First name required</span>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
        />
        <span>Email name required</span>
        <span>Invalid email format</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
