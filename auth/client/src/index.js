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
import { CssBaseline } from '@material-ui/core';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
