import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

describe('Login page should display submit form', () => {
  test('render form with default value of <empty string> for email and password', () => {
    const store = createStore(reducers, applyMiddleware(reduxThunk));

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const form = screen.getByRole('form');
    expect(form).toHaveFormValues({
      email: '',
      password: '',
    });
  });
});
