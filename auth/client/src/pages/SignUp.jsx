import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form } from '../components/Form';
import { formType } from '../helpers/formHelper';
import * as actions from '../actions';
import { Typography } from '@material-ui/core';

const SignUp = (props) => {
  return (
    <div>
      <Typography variant='h4'>SignUp Page</Typography>
      <Typography variant='body1' color='secondary'>
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
