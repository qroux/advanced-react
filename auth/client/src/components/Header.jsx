import { Link } from 'react-router-dom';
import './Header.scss';

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
        <Link to={btn.path} key={btn.path}>
          <div className='header__button'>{btn.label}</div>
        </Link>
      );
    });
  };

  return <div className='header'>{renderButtons()}</div>;
};
