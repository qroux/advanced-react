import { Typography, useTheme } from '@material-ui/core';

export const Home = () => {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme.palette.secondary.main }}>
      <Typography variant='h4' gutterBottom style={{ textAlign: 'center' }}>
        Welcome to homepage
      </Typography>
    </div>
  );
};
