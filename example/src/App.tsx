import { base, ColorShade, extendTheme, ThemeProvider, Typography } from 'kickass-ui';
import 'kickass-ui/dist/index.css';
import React from 'react';
const customTheme = extendTheme(base, {
  ...base,
  font: {
    ...base.font,
    display: {
      ...base.font.display,
      sm: {
        size: '10px',
        lineHeight: '10px',
        letterSpacing: '10px',
      },
    },
  },
  color: {
    ...base.color,
    primary: {
      ...(base.color.primary as Record<ColorShade, string>),
      '600': 'red',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider customTheme={customTheme}>
      <Typography size={'sm'} className="text-primary-600">
        Kickass UI Example project
      </Typography>
    </ThemeProvider>
  );
};

export default App;
