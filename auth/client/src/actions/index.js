import { actionTypes } from './types';
import axios from 'axios';
import history from '../helpers/history';

export const signup = (formProps) => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:3090/signup',
      formProps
    );
    dispatch({ type: actionTypes.AUTH_USER, payload: response.data.token });
    history.push('/login');
  } catch (err) {
    dispatch({
      type: actionTypes.AUTH_ERROR_MSG,
      payload: err.response.data.error,
    });
  }
};
