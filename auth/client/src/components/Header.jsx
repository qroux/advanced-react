import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Header.scss';

const HeaderContainer = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const Button = styled.div({
  padding: '10px 15px',
});

export const Header = ({ token }) => {
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
        <Link to={btn.path} key={btn.path} className='linko'>
          <Button>{btn.label}</Button>
        </Link>
      );
    });
  };

  return <HeaderContainer>{renderButtons()}</HeaderContainer>;
};
