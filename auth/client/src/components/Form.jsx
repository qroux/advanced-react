import { useState } from 'react';
import { Field } from 'redux-form';
import { formType } from '../helpers/formHelper';

export const Form = ({ type, action }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    action({ email, password });
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label>email</label>
          <Field
            name='email'
            type='text'
            component='input'
            onChange={onEmailChange}
            value={email}
          />
        </fieldset>
        <fieldset>
          <label>password</label>
          <Field
            name='password'
            type='password'
            component='input'
            onChange={onPasswordChange}
            value={password}
          />
        </fieldset>
        <button type='submit'>
          {type === formType.SIGNUP ? 'Register' : 'Login'}
        </button>
      </form>
    </div>
  );
};
