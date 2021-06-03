import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Page from './components/Page';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const myTheme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: myTheme.palette.background.default,
        color: myTheme.palette.text.primary,
        boxSizing: 'border-box',
      }}>
      <CssBaseline />
      <ThemeProvider theme={myTheme}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Page />
      </ThemeProvider>
    </div>
  );
};

export default App;
