import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';

import { reduxForm } from 'redux-form';
import { Form } from '../components/Form';
import { formType } from '../helpers/formHelper';
import { Typography, useTheme } from '@material-ui/core';

const Login = (props) => {
  const theme = useTheme();

  return (
    <div>
      <Typography variant='h4' style={{ color: theme.palette.secondary.main }}>
        Login Page
      </Typography>
      <Typography variant='body1' color='secondary'>
        {props.errorMessage ? props.errorMessage : null}
      </Typography>
      <Form type={formType.LOGIN} action={props.login} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'login' })
)(Login);
