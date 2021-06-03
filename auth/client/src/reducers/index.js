import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import theme from './theme';

export default combineReducers({ auth, form: formReducer, theme });
