import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';

import styled from 'styled-components';
import { grantAccess } from '../helpers/grantAccess';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { device } from '../helpers/device';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  opacity: 1;

  // &:hover {
  //   opacity: 1;
  // }

  @media ${device.mobileS} {
    padding: 10vh 0;
    display: flex;
    justify-content: center;
  }

  @media ${device.laptop} {
    padding: 10vh;
    display: flex;
    justify-content: flex-start;
  }
`;

const Page = ({ children, requireAuth, auth, resetError }) => {
  const history = useHistory();
  useEffect(() => {
    return function cleanup() {
      resetError();
    };
  }, []);

  if (!grantAccess(requireAuth, auth)) {
    history.push('/');
  }

  return <Container id='page-container'>{children}</Container>;
};

Page.defaultProps = {
  requireAuth: true,
};

const mapStateToProps = (state) => {
  return { auth: state.auth.authenticated };
};

export default compose(connect(mapStateToProps, actions))(Page);
