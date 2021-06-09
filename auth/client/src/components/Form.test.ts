import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

describe('Test Form component', () => {
  test('OnChange event update email/password value in local state', () => {
    const store = createStore(reducers, applyMiddleware(reduxThunk));

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const inputs = screen.queryAllByRole('textbox');
    expect(inputs).toEqual('truc');
    // userEvent.click()
    // expect(screen.getByLabelText('Check')).toBeChecked()
  });
});
