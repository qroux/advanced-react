import './App.scss';
import { Router, Switch, Route } from 'react-router-dom';
import history from './helpers/history';
import { Header } from './components/Header';
import { Page } from './components/Page';
import { Home } from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const routes = [
    { path: '/', view: <Home /> },
    { path: '/signup', view: <SignUp /> },
    { path: '/login', view: <Login /> },
    // { path: '/signout', view: 'Disconnect' },
    // { path: '/feature', view: 'Feature' },
  ];

  const renderRoutes = routes.map((route) => {
    return (
      <Route exact path={route.path} key={route.path}>
        <Page children={route.view} />
      </Route>
    );
  });
  return (
    <Router history={history}>
      <div className='App'>
        <Header />
        <Switch>{renderRoutes}</Switch>
      </div>
    </Router>
  );
}

export default App;
