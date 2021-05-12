import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  const buttons = [
    { path: '/', label: 'Homepage' },
    { path: '/signup', label: 'Sign Up' },
    { path: '/login', label: 'Login' },
    { path: '/signout', label: 'Disconnect' },
    { path: '/feature', label: 'Feature' },
  ];

  const renderButtons = buttons.map((btn) => {
    return (
      <Link to={btn.path} key={btn.path}>
        <div className='header__button'>{btn.label}</div>
      </Link>
    );
  });

  return <div className='header'>{renderButtons}</div>;
};
