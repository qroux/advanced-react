import { reduxForm } from 'redux-form';
import { Form } from '../components/Form';
import { formType } from '../helpers/formHelper';

const Login = () => {
  return (
    <div>
      <h3>Login Page</h3>
      <Form type={formType.LOGIN} />
    </div>
  );
};

export default reduxForm({ form: 'login' })(Login);
