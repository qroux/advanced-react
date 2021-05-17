import { actionTypes } from './types';
import axios from 'axios';

export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:3090/signup',
      formProps
    );
    dispatch({ type: actionTypes.AUTH_USER, payload: response.data.token });
    callback();
  } catch (err) {
    console.log('ICI', err.response.data.error);
    dispatch({
      type: actionTypes.AUTH_ERROR_MSG,
      payload: err.response.data.error,
    });
  }
};
