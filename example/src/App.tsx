import {
  Typography,
  extendTheme,
  base,
  ThemeProvider,
  TypographyVariants,
  ColorCodes,
} from 'kickass-ui';
import 'kickass-ui/dist/index.css';
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
      <Typography color={ColorCodes.PRIMARY} variant={TypographyVariants.H1}>
        Kickass UI Example project
      </Typography>
    </ThemeProvider>
  );
};

export default App;
