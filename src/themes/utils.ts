import { ITheme, IMappedTheme, ApplyThemeProps, base } from './types';

const mapTheme: (variables: ITheme) => IMappedTheme = (variables: ITheme) => {
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

/**
 * Helper function to define a new theme using existing theme
 *
 * @param {ITheme} extendingTheme The name of the theme to be set
 * @param {ITheme} newTheme custom theme from the user
 * @return {ITheme} returns new custom theme object
 */
export const extendTheme: (extendingTheme: ITheme, newTheme: ITheme) => ITheme = (
  extendingTheme: ITheme,
  newTheme: ITheme
): ITheme => {
  return { ...extendingTheme, ...newTheme };
};

/**
 * Helper function to set a new theme
 *
 * @param {string} theme The name of the theme to be set
 * @param {ITheme} customTheme custom theme from the user
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

export const dark = extendTheme(base, {
  primary: 'red',
  secondary: 'blue',
});

export const themes = {
  base,
  dark,
};
