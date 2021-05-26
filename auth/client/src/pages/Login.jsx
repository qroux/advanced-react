import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';

import { reduxForm } from 'redux-form';
import { Form } from '../components/Form';
import { formType } from '../helpers/formHelper';
import { Typography } from '@material-ui/core';

const Login = (props) => {
  return (
    <div>
      <Typography variant='h4'>Login Page</Typography>
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
