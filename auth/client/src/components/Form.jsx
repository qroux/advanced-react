import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Field } from 'redux-form';
import { formType } from '../helpers/formHelper';

import { TextField, Button, FormControl, Icon } from '@material-ui/core';

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
      <form
        noValidate
        autoComplete='off'
        onSubmit={onSubmitHandler}
        name='auth-form'>
        <FormControl style={{ width: '20%', minWidth: 250 }}>
          <TextField id='email-input' label='Email' size='small' margin='dense'>
            <Field
              name='email'
              type='text'
              component='input'
              onChange={onEmailChange}
              value={email}
            />
          </TextField>
          <TextField
            id='password-input'
            label='Password'
            size='small'
            margin='dense'>
            <Field
              name='password'
              type='password'
              component='input'
              onChange={onPasswordChange}
              value={password}
            />
          </TextField>
          <Button
            type='submit'
            variant='contained'
            color='secondary'
            style={{ marginTop: '1rem' }}
            startIcon={<Icon>send</Icon>}>
            {type === formType.SIGNUP ? 'Register' : 'Login'}
          </Button>
        </FormControl>
      </form>
    </div>
  );
};
