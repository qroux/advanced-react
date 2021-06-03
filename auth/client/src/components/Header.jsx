import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, useTheme } from '@material-ui/core';
import ThemeSwitch from './ThemeSwitch';

import { useLocation } from 'react-router-dom';

export const Header = ({ token, darkMode, setDarkMode }) => {
  const location = useLocation();

  const buttons = [
    { path: '/', label: 'Homepage', requireAuth: false, alwaysRender: true },
    { path: '/login', label: 'Login', requireAuth: false },
    { path: '/signup', label: 'Sign Up', requireAuth: false },
    { path: '/feature', label: 'Feature', requireAuth: true },
    { path: '/signout', label: 'Disconnect', requireAuth: true },
  ];

  const renderButtons = () => {
    const toRender = token
      ? buttons.filter((btn) => btn.requireAuth || btn.alwaysRender)
      : buttons.filter((btn) => btn.requireAuth !== true || btn.alwaysRender);

    return toRender.map((btn) => {
      return (
        <Tab
          value={btn.path}
          to={btn.path}
          key={btn.path}
          label={btn.label}
          component={Link}
          to={btn.path}
        />
      );
    });
  };

  return (
    <AppBar position='static' color='default'>
      <Toolbar variant='dense'>
        <Tabs value={location.pathname} indicatorColor='secondary'>
          {renderButtons()}
        </Tabs>
        <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
      </Toolbar>
    </AppBar>
  );
};
