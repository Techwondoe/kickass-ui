export interface Theme {
  contrast?: {
    danger: string;
    info: string;
    onSurface: string;
    primary: string;
    secondary: string;
    success: string;
    surface: string;
    warning: string;
  };
  custom?: {
    danger: string;
    info: string;
    onSurface: string;
    primary: string;
    secondary: string;
    success: string;
    surface: string;
    warning: string;
  };
  danger?: string;
  info?: string;
  onSurface?: string;
  primary?: string;
  secondary?: string;
  success?: string;
  surface?: string;
  warning?: string;
}

export interface MappedTheme {
  [key: string]: string | null;
}

export interface ApplyThemeProps {
  customTheme?: Theme;
  theme: string;
}

// default theme
export const base = {
  contrast: {
    danger: '#fff',
    info: '#fff',
    onSurface: '#fff',
    primary: '#fff',
    secondary: '#fff',
    success: '#000',
    surface: '#000',
    warning: '#fff',
  },
  custom: {
    danger: '#fff',
    info: '#fff',
    onSurface: '#fff',
    primary: '#fff',
    secondary: '#fff',
    success: '#000',
    surface: '#000',
    warning: '#fff',
  },
  danger: '#ff4e4e',
  info: '#5F9DF7',
  onSurface: '#000',
  primary: '#4d89ff',
  secondary: '#999999',
  success: '#4dff4d',
  surface: '#fff',
  warning: '#ff965f',
};
