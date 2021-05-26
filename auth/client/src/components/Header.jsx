import { useState } from 'react';
import { Link } from 'react-router-dom';
import UiLink from '@material-ui/core/Link';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useLocation } from 'react-router-dom';

// const HeaderContainer = styled.div({
//   width: '100%',
//   display: 'flex',
//   justifyContent: 'flex-start',
//   alignItems: 'center',
// });

export const Header = ({ token }) => {
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
    <AppBar position='static'>
      <Toolbar>
        <Tabs value={location.pathname}>{renderButtons()}</Tabs>
      </Toolbar>
    </AppBar>
  );
};
