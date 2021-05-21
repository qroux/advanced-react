import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// REDUX
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

// STYLING
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle({
  body: {
    margin: 0,
    padding: 0,
    fontFamily: ['Roboto', 'sans-serif'],
    '-webkitFont-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  code: {
    fontFamily: [
      'source-code-pro',
      'Menlo',
      'Monaco',
      'Consolas',
      'Courier New',
      'monospace',
    ],
  },
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
