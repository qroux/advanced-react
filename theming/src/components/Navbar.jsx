import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';

const Navbar = ({ darkMode, setDarkMode }) => {
  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'>HomePage</Typography>
        <FormGroup style={{ marginLeft: 'auto' }}>
          <FormControlLabel
            labelPlacement='start'
            label='dark mode'
            control={<Switch checked={darkMode} onChange={handleChange} />}
          />
        </FormGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
