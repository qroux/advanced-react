import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from './actions';

import './App.scss';
import { Header } from './components/Header';
import Page from './components/Page';
import { Home } from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Feature from './pages/Feature';

const App = ({ fetchToken }) => {
  useEffect(() => {
    console.log('fetch token called');
    fetchToken();
  }, []);

  const routes = [
    { path: '/', view: <Home />, requireAuth: false },
    { path: '/signup', view: <SignUp />, requireAuth: false },
    { path: '/login', view: <Login />, requireAuth: false },
    // { path: '/signout', view: 'Disconnect', requireAuth: true  },
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
      <div className='App'>
        <Header />
        <Switch>{renderRoutes}</Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth.authenticated };
};

export default compose(connect(mapStateToProps, actions))(App);
