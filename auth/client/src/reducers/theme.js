import { actionTypes } from '../actions/types';
import Cookies from 'js-cookie';

const fetchCookie = () => {
  const cookie = Cookies.get('DARK_MODE');
  return !cookie || cookie === 'false' ? false : true;
};

const INITIAL_STATE = {
  darkMode: fetchCookie(),
  errorMessage: '',
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_DARKMODE:
      return { darkMode: !state.darkMode, errorMessage: '' };
    case actionTypes.THEME_ERROR_MSG:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default themeReducer;
