import { Theme, MappedTheme, ApplyThemeProps, base } from './types';

const mapTheme: (variables: Theme) => MappedTheme = (variables: Theme) => {
  return {

    '--color-black': variables.black || '',
    '--color-white': variables.white || '',
    '--color-gray-25': variables.gray?.[25] || '',
    '--color-gray-50': variables.gray?.[50] || '',
    '--color-gray-100': variables.gray?.[100] || '',
    '--color-gray-200': variables.gray?.[200] || '',
    '--color-gray-300': variables.gray?.[300] || '',
    '--color-gray-400': variables.gray?.[400] || '',
    '--color-gray-500': variables.gray?.[500] || '',
    '--color-gray-600': variables.gray?.[600] || '',
    '--color-gray-700': variables.gray?.[700] || '',
    '--color-gray-800': variables.gray?.[800] || '',
    '--color-gray-900': variables.gray?.[900] || '',
    '--color-gray-DEFAULT': variables.gray?.DEFAULT || '',
    '--color-primary-25': variables.primary?.[25] || '',
    '--color-primary-50': variables.primary?.[50] || '',
    '--color-primary-100': variables.primary?.[100] || '',
    '--color-primary-200': variables.primary?.[200] || '',
    '--color-primary-300': variables.primary?.[300] || '',
    '--color-primary-400': variables.primary?.[400] || '',
    '--color-primary-500': variables.primary?.[500] || '',
    '--color-primary-600': variables.primary?.[600] || '',
    '--color-primary-700': variables.primary?.[700] || '',
    '--color-primary-800': variables.primary?.[800] || '',
    '--color-primary-900': variables.primary?.[900] || '',
    '--color-primary-DEFAULT': variables.primary?.DEFAULT || '',
    '--color-error-25': variables.error?.[25] || '',
    '--color-error-50': variables.error?.[50] || '',
    '--color-error-100': variables.error?.[100] || '',
    '--color-error-200': variables.error?.[200] || '',
    '--color-error-300': variables.error?.[300] || '',
    '--color-error-400': variables.error?.[400] || '',
    '--color-error-500': variables.error?.[500] || '',
    '--color-error-600': variables.error?.[600] || '',
    '--color-error-700': variables.error?.[700] || '',
    '--color-error-800': variables.error?.[800] || '',
    '--color-error-900': variables.error?.[900] || '',
    '--color-error-DEFAULT': variables.error?.DEFAULT || '',
    '--color-warning-25': variables.warning?.[25] || '',
    '--color-warning-50': variables.warning?.[50] || '',
    '--color-warning-100': variables.warning?.[100] || '',
    '--color-warning-200': variables.warning?.[200] || '',
    '--color-warning-300': variables.warning?.[300] || '',
    '--color-warning-400': variables.warning?.[400] || '',
    '--color-warning-500': variables.warning?.[500] || '',
    '--color-warning-600': variables.warning?.[600] || '',
    '--color-warning-700': variables.warning?.[700] || '',
    '--color-warning-800': variables.warning?.[800] || '',
    '--color-warning-900': variables.warning?.[900] || '',
    '--color-warning-DEFAULT': variables.warning?.DEFAULT || '',
    '--color-success-25': variables.success?.[25] || '',
    '--color-success-50': variables.success?.[50] || '',
    '--color-success-100': variables.success?.[100] || '',
    '--color-success-200': variables.success?.[200] || '',
    '--color-success-300': variables.success?.[300] || '',
    '--color-success-400': variables.success?.[400] || '',
    '--color-success-500': variables.success?.[500] || '',
    '--color-success-600': variables.success?.[600] || '',
    '--color-success-700': variables.success?.[700] || '',
    '--color-success-800': variables.success?.[800] || '',
    '--color-success-900': variables.success?.[900] || '',
    '--color-success-DEFAULT': variables.success?.DEFAULT || '',
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
