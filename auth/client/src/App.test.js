import { render, screen } from '@testing-library/react';
import App from './App';

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
});
