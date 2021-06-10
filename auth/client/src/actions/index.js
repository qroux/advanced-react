import { actionTypes } from './types';
import axios from 'axios';
import Cookies from 'js-cookie';

const genExpiration = () => {
  const expiration = new Date();
  expiration.setMinutes(expiration.getMinutes() + 60);
  return expiration;
};

export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:3090/signup',
      formProps
    );
    dispatch({ type: actionTypes.AUTH_USER, payload: response.data.token });
    Cookies.set('AUTH_JWT_TOKEN', response.data.token, {
      expires: genExpiration(),
      sameSite: 'strict',
    });
    callback();
  } catch (err) {
    dispatch({
      type: actionTypes.AUTH_ERROR_MSG,
      payload: err.response.data.error,
    });
  }
};

export const login = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3090/login', formProps);
    dispatch({ type: actionTypes.AUTH_USER, payload: response.data.token });
    Cookies.set('AUTH_JWT_TOKEN', response.data.token, {
      expires: genExpiration(),
      sameSite: 'strict',
    });
    callback();
  } catch (err) {
    dispatch({
      type: actionTypes.AUTH_ERROR_MSG,
      payload: err.response.data.error,
    });
  }
};

export const signout = (callback) => async (dispatch) => {
  try {
    Cookies.remove('AUTH_JWT_TOKEN');
    dispatch({ type: actionTypes.AUTH_USER, payload: '' });
    callback();
  } catch (err) {
    dispatch({
      type: actionTypes.AUTH_ERROR_MSG,
      payload: err.response.data.error,
    });
  }
};

// UTILS
export const fetchToken = () => async (dispatch) => {
  try {
    const token = Cookies.get('AUTH_JWT_TOKEN');
    dispatch({ type: actionTypes.AUTH_USER, payload: token });
  } catch (err) {
    dispatch({
      type: actionTypes.AUTH_ERROR_MSG,
      payload: err,
    });
  }
};

export const resetError = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.RESET_ERROR,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.AUTH_ERROR_MSG,
      payload: err,
    });
  }
};

// THEME ACTIONS
export const switchDarkMode = (current) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SWITCH_DARKMODE });
    Cookies.set('DARK_MODE', !current, {
      expires: 365,
      sameSite: 'strict',
    });
  } catch (err) {
    dispatch({ type: actionTypes.THEME_ERROR_MSG });
  }
};
