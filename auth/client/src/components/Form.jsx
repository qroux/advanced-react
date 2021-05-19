import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Field } from 'redux-form';
import { formType } from '../helpers/formHelper';
import './Form.scss';

export const Form = ({ type, action }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    action({ email, password }, () => {
      history.push('/feature');
    });
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} name='auth-form'>
        <div className='input-container'>
          <label>email</label>
          <Field
            name='email'
            type='text'
            component='input'
            onChange={onEmailChange}
            value={email}
          />
        </div>
        <div className='input-container'>
          <label>password</label>
          <Field
            name='password'
            type='password'
            component='input'
            onChange={onPasswordChange}
            value={password}
          />
        </div>

        <button type='submit'>
          {type === formType.SIGNUP ? 'Register' : 'Login'}
        </button>
      </form>
    </div>
  );
};
