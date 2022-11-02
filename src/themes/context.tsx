import React, { useEffect, useState } from 'react';
import { applyTheme } from './utils';
import { Theme } from './types';

export interface ThemeInputProps {
  children: React.ReactNode;
  customTheme?: Theme;
}

export interface ThemeContextProps {
  setTheme: (value: 'dark' | 'base') => void;
  theme: string;
}

const useTheme = (customTheme?: Theme): ThemeContextProps => {
  const [theme, setTheme] = useState('base');
  /**
   * Run the applyTheme function every time the theme state changes
   */
  useEffect(() => {
    if (!customTheme) {
      applyTheme({ theme });
    } else {
      applyTheme({ theme: 'base', customTheme });
    }
  }, [theme, customTheme]);

  return {
    theme,
    setTheme,
  };
};

const ThemeContext = React.createContext<ThemeContextProps>({
  theme: 'base',
  setTheme: () => {},
});

export const ThemeProvider = ({ children, customTheme }: ThemeInputProps) => {
  const authBag = useTheme(customTheme);
  return <ThemeContext.Provider value={authBag}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => React.useContext(ThemeContext);
