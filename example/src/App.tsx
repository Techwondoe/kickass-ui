import {
  Typography,
  extendTheme,
  base,
  ThemeProvider,
} from 'react-tailwind-components';
import 'react-tailwind-components/dist/index.css';
import React from 'react';

const customTheme = extendTheme(base, {
  primary: 'blue',
  secondary: 'green',
  contrast: {
    ...base.contrast,
    primary: 'red',
  },
});

const App = () => {
  return (
    <ThemeProvider customTheme={customTheme}>
      <Typography color="primary" variant="h1">
        Kickass UI Example project
      </Typography>
    </ThemeProvider>
  );
};

export default App;
