import React from 'react';
import './App.css';
import { ThemeProvider } from './context/themeContext';
import { Main } from './main';
import base from './themes/base';
import { extend } from './themes/utils';

const customTheme = extend(base, {
  primary: 'purple',
  secondary: 'green',
  contrast: {
    ...base.contrast,
    primary: 'red',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider customTheme={customTheme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
