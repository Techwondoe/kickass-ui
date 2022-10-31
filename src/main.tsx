import React from 'react';
import { Button, Typography } from './components/atoms';
import { useThemeContext } from './context/themeContext';

export function Main() {
  const { setTheme, theme } = useThemeContext();
  return (
    <div>
      <Typography color="primary" variant="h1">
        test
      </Typography>
      <Typography color="info" variant="h2">
        test
      </Typography>
      <Typography color="success" variant="h3">
        test
      </Typography>
      <Typography color="warning" variant="h4">
        test
      </Typography>
      <Typography color="danger" variant="h5">
        test
      </Typography>
      <Button
        onClick={() => {
          console.info('type 1 pressed');
        }}
        variant="contained">
        test the button
      </Button>
      <Button
        onClick={() => {
          console.info('type 2 pressed');
        }}
        variant="outlined"
        color="success">
        test the button
      </Button>
      <Button
        onClick={() => setTheme(theme === 'base' ? 'dark' : 'base')}
        variant="outlined"
        size="medium"
        color="onSurface">
        test the button
      </Button>
      <h1 className="text-3xl font-bold underline">test contrast color</h1>
    </div>
  );
}
