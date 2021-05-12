import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form } from '../components/Form';
import { formType } from '../helpers/formHelper';
import * as actions from '../actions';

const SignUp = (props) => {
  return (
    <div>
      <h3>SignUp Page</h3>
      {props.errorMessage ? <p>{props.errorMessage}</p> : null}
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
