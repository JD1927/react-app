import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

  const {
    name,
    email,
    password,
    confirmPassword,
    formData,
    onChange,
    onResetForm,
    isValidEmail,
  } = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${ name.trim().length <=0 && 'has-error' }`}
        />
        { name.trim().length <=0 && <span>This field is required</span> }
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        { !isValidEmail(email) && <span>Invalid email</span> }
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        { password.trim().length <=0 && <span>This field is required</span> }
        { password.trim().length > 0 && password.trim().length < 6 && <span>Password must be at least 6 characters</span> }
        <input
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}

        />
        { confirmPassword.trim().length <=0 && <span>This field is required</span> }
        { confirmPassword.trim().length > 0 && password !== confirmPassword && <span>Password must match</span> }
        <button type="submit">CREATE</button>
        <button type="button" onClick={onResetForm}>RESET FORM</button>
      </form>
    </div>
  );
};
