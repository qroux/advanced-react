import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';
import { useHistory } from 'react-router-dom';

const SignOut = ({ errorMessage, signout }) => {
  const history = useHistory();

  const handleClick = () => {
    signout(() => {
      history.push('/');
    });
  };

  return (
    <div>
      <h3>SignOUT Page</h3>
      {errorMessage ? <p>{errorMessage}</p> : null}
      <button onClick={handleClick}>Disconnect</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(connect(mapStateToProps, actions))(SignOut);
