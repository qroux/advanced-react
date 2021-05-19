import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './pages/Login';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

describe('App Component tests', () => {
  test('renders App component with rigth number of links => not authed', () => {
    const store = createStore(reducers, applyMiddleware(reduxThunk));

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const linkElements = screen.queryAllByRole('link');
    expect(linkElements.length).toEqual(3);
  });

  test('update store on form on submit', () => {
    const store = createStore(reducers, applyMiddleware(reduxThunk));

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const title = screen.queryByRole('heading');
    expect(title).toHaveTextContent('Login Page');
  });
});
