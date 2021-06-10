import { Typography } from '@material-ui/core';

export const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '85vh',
      }}>
      <Typography
        variant='h4'
        gutterBottom
        style={{ textAlign: 'center' }}
        color='textPrimary'>
        Welcome to homepage
      </Typography>
    </div>
  );
};
