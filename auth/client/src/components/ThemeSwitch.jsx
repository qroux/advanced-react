import { useTheme, withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useState } from 'react';
import { FormGroup } from '@material-ui/core';

const ThemeSwitch = ({ darkMode, setDarkMode }) => {
  const handleSwitch = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{ marginLeft: 'auto' }}>
      <FormGroup>
        <FormControlLabel
          label='Dark'
          labelPlacement='start'
          color='default'
          control={
            <Switch
              size='small'
              checked={darkMode}
              onChange={handleSwitch}
              name='checkedA'
              color='secondary'
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          }
        />
      </FormGroup>
    </div>
  );
};

export default ThemeSwitch;
