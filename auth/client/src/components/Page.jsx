import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';

import styled from 'styled-components';
import './Error.scss';
import Error from './Error';
import { grantAccess } from '../helpers/grantAccess';
import { useEffect } from 'react';

const Container = styled.div({
  width: '100%',
  opacity: 0.7,
  '&:hover': {
    opacity: 1,
  },
  '@media (min-width: 300px)': {
    padding: '10vh 2vh',
    display: 'flex',
    justifyContent: 'center',
  },
  '@media (min-width: 1024px)': {
    padding: '5vh',
    display: 'flex',
    justifyContent: 'flex-start',
  },
});

const Page = ({ children, requireAuth, auth, resetError }) => {
  useEffect(() => {
    return function cleanup() {
      resetError();
    };
  }, []);

  return grantAccess(requireAuth, auth) ? (
    <Container>{children}</Container>
  ) : (
    <Container>
      <Error message='Auth required to access this page' />
    </Container>
  );
};

Page.defaultProps = {
  requireAuth: true,
};

const mapStateToProps = (state) => {
  return { auth: state.auth.authenticated };
};

export default compose(connect(mapStateToProps, actions))(Page);
