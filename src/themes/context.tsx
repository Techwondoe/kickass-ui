import React, { useEffect, useState } from 'react';
import { applyTheme, ITheme, DEFAULT_THEME } from '../themes/utils';

export interface ThemeInputProps {
  children: React.ReactNode;
  customTheme?: ITheme;
}

export interface ThemeContextProps {
  setTheme: (value: 'dark' | 'base') => void;
  theme: string;
}

const useTheme = (customTheme?: ITheme): ThemeContextProps => {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  /**
   * Run the applyTheme function every time the theme state changes
   */
  useEffect(() => {
    if (!customTheme) {
      applyTheme({ theme });
    }
  }, [theme, customTheme]);

  useEffect(() => {
    applyTheme({ theme: 'base', customTheme });
  }, [customTheme]);

  return {
    theme,
    setTheme,
  };
};

const ThemeContext = React.createContext<ThemeContextProps>({
  theme: 'base',
  setTheme: () => Promise.resolve(),
});

export const ThemeProvider = ({ children, customTheme }: ThemeInputProps) => {
  const authBag = useTheme(customTheme);
  return <ThemeContext.Provider value={authBag}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => React.useContext(ThemeContext);
