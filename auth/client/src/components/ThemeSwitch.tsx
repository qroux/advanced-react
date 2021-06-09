import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { FormGroup } from '@material-ui/core';

import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';

const ThemeSwitch = ({ switchDarkMode, darkMode }) => {
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
              onChange={() => switchDarkMode(darkMode)}
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

const mapStateToProps = (state) => {
  return {
    darkMode: state.theme.darkMode,
  };
};

export default compose(connect(mapStateToProps, actions))(ThemeSwitch);
