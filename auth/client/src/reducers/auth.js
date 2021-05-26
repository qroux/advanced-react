import { actionTypes } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AUTH_USER:
      return { ...state, authenticated: action.payload, errorMessage: '' };
    case actionTypes.AUTH_ERROR_MSG:
      return { ...state, errorMessage: action.payload };
    case actionTypes.RESET_ERROR:
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

export default authReducer;
