/* eslint-disable sort-keys */
import { base } from './constants';
import { Theme, MappedTheme, ApplyThemeProps } from './types';

const generateColors = (variables: Theme) => {
  return {
    '--color-black': (variables.color.black as string) || '',
    '--color-white': (variables.color.white as string) || '',
    '--color-gray-25': variables.color.gray?.[25] || '',
    '--color-gray-50': variables.color.gray?.[50] || '',
    '--color-gray-100': variables.color.gray?.[100] || '',
    '--color-gray-200': variables.color.gray?.[200] || '',
    '--color-gray-300': variables.color.gray?.[300] || '',
    '--color-gray-400': variables.color.gray?.[400] || '',
    '--color-gray-500': variables.color.gray?.[500] || '',
    '--color-gray-600': variables.color.gray?.[600] || '',
    '--color-gray-700': variables.color.gray?.[700] || '',
    '--color-gray-800': variables.color.gray?.[800] || '',
    '--color-gray-900': variables.color.gray?.[900] || '',
    '--color-gray-DEFAULT': variables.color.gray?.['DEFAULT'] || '',
    '--color-primary-25': variables.color.primary?.[25] || '',
    '--color-primary-50': variables.color.primary?.[50] || '',
    '--color-primary-100': variables.color.primary?.[100] || '',
    '--color-primary-200': variables.color.primary?.[200] || '',
    '--color-primary-300': variables.color.primary?.[300] || '',
    '--color-primary-400': variables.color.primary?.[400] || '',
    '--color-primary-500': variables.color.primary?.[500] || '',
    '--color-primary-600': variables.color.primary?.[600] || '',
    '--color-primary-700': variables.color.primary?.[700] || '',
    '--color-primary-800': variables.color.primary?.[800] || '',
    '--color-primary-900': variables.color.primary?.[900] || '',
    '--color-primary-DEFAULT': variables.color.primary?.['DEFAULT'] || '',
    '--color-error-25': variables.color.error?.[25] || '',
    '--color-error-50': variables.color.error?.[50] || '',
    '--color-error-100': variables.color.error?.[100] || '',
    '--color-error-200': variables.color.error?.[200] || '',
    '--color-error-300': variables.color.error?.[300] || '',
    '--color-error-400': variables.color.error?.[400] || '',
    '--color-error-500': variables.color.error?.[500] || '',
    '--color-error-600': variables.color.error?.[600] || '',
    '--color-error-700': variables.color.error?.[700] || '',
    '--color-error-800': variables.color.error?.[800] || '',
    '--color-error-900': variables.color.error?.[900] || '',
    '--color-error-DEFAULT': variables.color.error?.['DEFAULT'] || '',
    '--color-warning-25': variables.color.warning?.[25] || '',
    '--color-warning-50': variables.color.warning?.[50] || '',
    '--color-warning-100': variables.color.warning?.[100] || '',
    '--color-warning-200': variables.color.warning?.[200] || '',
    '--color-warning-300': variables.color.warning?.[300] || '',
    '--color-warning-400': variables.color.warning?.[400] || '',
    '--color-warning-500': variables.color.warning?.[500] || '',
    '--color-warning-600': variables.color.warning?.[600] || '',
    '--color-warning-700': variables.color.warning?.[700] || '',
    '--color-warning-800': variables.color.warning?.[800] || '',
    '--color-warning-900': variables.color.warning?.[900] || '',
    '--color-warning-DEFAULT': variables.color.warning?.['DEFAULT'] || '',
    '--color-success-25': variables.color.success?.[25] || '',
    '--color-success-50': variables.color.success?.[50] || '',
    '--color-success-100': variables.color.success?.[100] || '',
    '--color-success-200': variables.color.success?.[200] || '',
    '--color-success-300': variables.color.success?.[300] || '',
    '--color-success-400': variables.color.success?.[400] || '',
    '--color-success-500': variables.color.success?.[500] || '',
    '--color-success-600': variables.color.success?.[600] || '',
    '--color-success-700': variables.color.success?.[700] || '',
    '--color-success-800': variables.color.success?.[800] || '',
    '--color-success-900': variables.color.success?.[900] || '',
    '--color-success-DEFAULT': variables.color.success?.['DEFAULT'] || '',
  };
};

const generateFonts = (variables: Theme) => {
  return {
    '--font-display-xl-size': variables.font.display.xl.size || '',
    '--font-display-xl-lineHeight': variables.font.display.xl.lineHeight || '',
    '--font-display-xl-letterSpacing': variables.font.display.xl.letterSpacing || '',
    '--font-text-xl-size': variables.font.text.xl.size || '',
    '--font-text-xl-lineHeight': variables.font.text.xl.lineHeight || '',
    '--font-text-xl-letterSpacing': variables.font.text.xl.letterSpacing || '',
  };
};

const mapTheme: (variables: Theme) => MappedTheme = (variables: Theme) => {
  const colors = generateColors(variables);
  const fonts = generateFonts(variables);
  return {
    ...colors,
    ...fonts,
  };
};

/**
 * Helper function to define a new theme using existing theme
 *
 * @param {Theme} extendingTheme The name of the theme to be set
 * @param {Theme} newTheme custom theme from the user
 * @return {Theme} returns new custom theme object
 */
export const extendTheme: (extendingTheme: Theme, newTheme: Theme) => Theme = (
  extendingTheme: Theme,
  newTheme: Theme
): Theme => {
  return { ...extendingTheme, ...newTheme };
};

/**
 * Helper function to set a new theme
 *
 * @param {string} theme The name of the theme to be set
 * @param {Theme} customTheme custom theme from the user
 * @return {void}
 */
export const applyTheme = ({ theme, customTheme }: ApplyThemeProps): void => {
  const themeObject: MappedTheme = mapTheme(customTheme ? customTheme : themes[theme]);
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

// export const dark = extendTheme(base, {
//   primary: '#000',
//   secondary: '#fff',
// });

export const themes = {
  base,
  // dark,
};
