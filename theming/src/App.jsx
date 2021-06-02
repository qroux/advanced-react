import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Page from './components/Page';

const lightTheme = {
  primaryLight: '#ACD7BE',
  primaryMain: '#7FC29B',
};

const darkTheme = {
  primaryLight: '#464035',
  primaryMain: '#0C0B09',
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const myTheme = createMuiTheme({
    palette: {
      primary: {
        light: !darkMode ? lightTheme.primaryLight : darkTheme.primaryLight,
        main: !darkMode ? lightTheme.primaryMain : darkTheme.primaryMain,
      },
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Page theme={myTheme} />
    </ThemeProvider>
  );
};

export default App;
