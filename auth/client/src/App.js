import { useEffect, Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from './actions';

import styled from 'styled-components';
import { Header } from './components/Header';
import Page from './components/Page';
import { Home } from './pages/Home';
import { Loading } from './pages/Loading';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignOut from './pages/Signout';
import Feature from './pages/Feature';

// const Login = lazy(() => import('./pages/Login'));
// const SignUp = lazy(() => import('./pages/SignUp'));
// const SignOut = lazy(() => import('./pages/Signout'));
// const Feature = lazy(() => import('./pages/Feature'));

const AppContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

const App = ({ fetchToken, auth }) => {
  const [darkMode, setDarkMode] = useState(false);
  const palletType = darkMode ? 'dark' : 'light';
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: palletType ? '#3A1772' : '#D741A7',
      },
      secondary: {
        main: palletType ? '#D741A7' : '#3A1772',
      },
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
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Suspense fallback={<Loading />}>
          <AppContainer>
            <Header
              token={auth}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
            <Switch>{renderRoutes}</Switch>
          </AppContainer>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth.authenticated };
};

export default compose(connect(mapStateToProps, actions))(App);
