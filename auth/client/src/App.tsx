import { useEffect, Suspense, lazy, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import { ReduxState, StateToProps } from './interfaces/ReduxState.interface';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from './actions';

import styled from 'styled-components';
import { Header } from './components/Header';
import Page from './components/Page';
import { Home } from './pages/Home';
import { Loading } from './pages/Loading';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AnimatePresence } from 'framer-motion';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignOut from './pages/Signout';
import Feature from './pages/Feature';

const AppContainer = styled.div(({ myTheme }: { myTheme: any }) => {
  return {
    minHeight: '100vh',
    backgroundColor: myTheme.palette.background.default,
    boxSizing: 'border-box',
  };
});

const App = ({
  fetchToken,
  auth,
  darkMode = false,
}: {
  darkmode?: boolean;
}) => {
  const location = useLocation();
  const palletType = darkMode ? 'dark' : 'light';
  const myTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  useEffect(() => {
    fetchToken();
  }, []);

  const routes = [
    { path: '/', view: <Home />, requireAuth: false },
    { path: '/signup', view: <SignUp />, requireAuth: false },
    { path: '/login', view: <Login />, requireAuth: false },
    { path: '/signout', view: <SignOut /> },
    { path: '/feature', view: <Feature /> },
  ];

  const renderRoutes = routes.map((route) => {
    return (
      <Route exact path={route.path} key={route.path}>
        <Page children={route.view} requireAuth={route.requireAuth} />
      </Route>
    );
  });
  return (
    <ThemeProvider theme={myTheme}>
      <Suspense fallback={<Loading />}>
        <AppContainer myTheme={myTheme}>
          <Header token={auth} />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              {renderRoutes}
            </Switch>
          </AnimatePresence>
        </AppContainer>
      </Suspense>
    </ThemeProvider>
  );
};

const mapStateToProps = (state: ReduxState): StateToProps => {
  return {
    auth: state.auth.authenticated,
    darkMode: state.theme.darkMode,
  };
};

export default compose(connect(mapStateToProps, actions))(App);
