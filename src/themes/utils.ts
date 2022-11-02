export interface ITheme {
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
  danger?: string;
  info?: string;
  onSurface?: string;
  primary?: string;
  secondary?: string;
  success?: string;
  surface?: string;
  warning?: string;
}

export interface IThemes {
  [key: string]: ITheme;
}

export interface IMappedTheme {
  [key: string]: string | null;
}

export interface ApplyThemeProps {
  customTheme?: ITheme;
  theme: string;
}

export const mapTheme: (variables: ITheme) => IMappedTheme = (variables: ITheme) => {
  return {
    '--color-contrast-danger': variables.contrast?.danger || '',
    '--color-contrast-info': variables.contrast?.info || '',
    '--color-contrast-onSurface': variables.contrast?.onSurface || '',
    '--color-contrast-primary': variables.contrast?.primary || '',
    '--color-contrast-secondary': variables.contrast?.secondary || '',
    '--color-contrast-success': variables.contrast?.success || '',
    '--color-contrast-surface': variables.contrast?.surface || '',
    '--color-contrast-warning': variables.contrast?.warning || '',
    '--color-danger': variables.danger || '',
    '--color-info': variables.info || '',
    '--color-onSurface': variables.onSurface || '',
    '--color-primary': variables.primary || '',
    '--color-secondary': variables.secondary || '',
    '--color-success': variables.success || '',
    '--color-surface': variables.surface || '',
    '--color-warning': variables.warning || '',
  };
};

export const extendTheme: (extending: ITheme, newTheme: ITheme) => ITheme = (
  extending: ITheme,
  newTheme: ITheme
): ITheme => {
  return { ...extending, ...newTheme };
};

/**
 * Helper function to set a new theme
 *
 * @param {string} theme The name of the theme to be set
 * @param {string} customTheme custom theme from the suer
 * @return {void}
 */
export const applyTheme = ({ theme, customTheme }: ApplyThemeProps): void => {
  const themeObject: IMappedTheme = mapTheme(customTheme ? customTheme : themes[theme]);
  if (!themeObject) {
    return;
  }
  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    if (property === 'name') {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};

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
  danger: '#ff4e4e',
  info: '#5F9DF7',
  onSurface: '#000',
  primary: '#4d89ff',
  secondary: '#999999',
  success: '#4dff4d',
  surface: '#fff',
  warning: '#ff965f',
};
export const dark = extendTheme(base, {
  primary: 'red',
  secondary: 'blue',
});
export const DEFAULT_THEME = 'base';
export const themes: IThemes = {
  base,
  dark,
};

