import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form } from '../components/Form';
import { formType } from '../helpers/formHelper';
import * as actions from '../actions';
import { Typography, useTheme } from '@material-ui/core';

const SignUp = (props) => {
  return (
    <div>
      <Typography variant='h4' color='textPrimary'>
        SignUp Page
      </Typography>
      <Typography variant='body1' color='textSecondary'>
        {props.errorMessage ? props.errorMessage : null}
      </Typography>
      <Form action={props.signup} type={formType.SIGNUP} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(SignUp);
