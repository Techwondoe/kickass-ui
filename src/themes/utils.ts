/* eslint-disable sort-keys */
import { base } from './constants';
import { Theme, MappedTheme, ApplyThemeProps, FontSize } from './types';

const generateColors = (variables: Theme) => {
  let allColors = {};
  const colorTypes = ['white', 'black', 'gray', 'primary', 'error', 'warning', 'success'];
  const variantTypes = ['25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'DEFAULT'];

  for (const colorName of colorTypes) {
    if (colorName === 'white' || colorName === 'black') {
      allColors = {
        ...allColors,
        [`--color-${colorName}`]: (variables.color[colorName] as string) || '',
      };
    } else {
      for (const variant of variantTypes) {
        allColors = {
          ...allColors,
          [`--color-${colorName}-${variant}`]: (variables.color[colorName][variant]) || '',
        };
      }
    }
  }
  return allColors;
};

const generateFonts = (variables: Theme) => {
  const mapFont = (type: 'display' | 'text', size: FontSize) => {
    const variable = type === 'display' ? variables.font.display : variables.font.text;
    return {
      [`--font-${type}-${size}-size`]: variable[size].size || '',
      [`--font-${type}-${size}-lineHeight`]: variable[size].lineHeight || '',
      [`--font-${type}-${size}-letterSpacing`]: variable[size].letterSpacing || '',
    };
  };
  return {
    ...mapFont('display', FontSize['2XL']),
    ...mapFont('display', FontSize.XL),
    ...mapFont('display', FontSize.LG),
    ...mapFont('display', FontSize.MD),
    ...mapFont('display', FontSize.SM),
    ...mapFont('display', FontSize.XS),
    ...mapFont('text', FontSize['2XL']),
    ...mapFont('text', FontSize.XL),
    ...mapFont('text', FontSize.LG),
    ...mapFont('text', FontSize.MD),
    ...mapFont('text', FontSize.SM),
    ...mapFont('text', FontSize.XS),
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
