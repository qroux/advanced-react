import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';

import { reduxForm } from 'redux-form';
import { Form } from '../components/Form';
import { formType } from '../helpers/formHelper';

const Login = (props) => {
  return (
    <div>
      <h3>Login Page</h3>
      {props.errorMessage ? <p>{props.errorMessage}</p> : null}
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
