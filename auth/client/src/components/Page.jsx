import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';

import './Page.scss';
import './Error.scss';
import Error from './Error';
import { grantAccess } from '../helpers/grantAccess';

const Page = ({ children, requireAuth, auth }) => {
  return grantAccess(requireAuth, auth) ? (
    <div className='page__container'>{children}</div>
  ) : (
    <div className='page__container'>
      <Error message='Auth required to access this page' />
    </div>
  );
};

Page.defaultProps = {
  requireAuth: true,
};

const mapStateToProps = (state) => {
  return { auth: state.auth.authenticated };
};

export default compose(connect(mapStateToProps, actions))(Page);
