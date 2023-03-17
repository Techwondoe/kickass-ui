/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable sort-keys */
const plugin = require('tailwindcss/plugin');
const { colors } = require('../theme.json');

const buttonClassesGenerator = (colors) => {
  const sizeClasses = {
    '.btn-sm': {
      padding: '0.5rem 0.875rem',
      borderRadius: '.25rem',
      fontSize: '14px',
    },
    '.btn-md': {
      padding: '0.625rem 1rem',
      borderRadius: '.25rem',
      fontSize: '14px',
    },
    '.btn-lg': {
      padding: '0.625rem 1.125rem',
      borderRadius: '.25rem',
      fontSize: '16px',
    },
    '.btn-xl': {
      padding: '0.75rem 1.25rem',
      borderRadius: '.25rem',
      fontSize: '16px',
    },
    '.btn-2xl': {
      borderRadius: '.25rem',
      padding: '1rem 1.75rem',
      fontSize: '18px',
    },
    '.btn': {
      borderRadius: '.25rem',
      padding: '0.5rem 0.875rem',
      fontSize: '14px',
    },
  };
  const colorClasses = {};
  const btnColors = Object.keys(colors);
  for (const colorName of btnColors) {
    if (typeof colors[colorName] === 'string') {
      colorClasses[`.btn-${colorName}`] = {
        backgroundColor: colors[colorName],
      };
    } else {
      for (const color in colors[colorName]) {
        if (color === 'DEFAULT') {
          colorClasses[`.btn-${colorName}`] = {
            backgroundColor: colors[colorName][color],
            color: 'black',
          };
        } else {
          colorClasses[`.btn-${colorName}-${color}`] = {
            backgroundColor: colors[colorName][color],
            color: 'black',
          };
        }
      }
    }
  }
  return { ...colorClasses, ...sizeClasses };
};

const iconBadgeClassesGenerator = () => {
  const sizeClasses = {
    '.ibdge-sm': {
      width: '1.25rem',
      height: '1.25rem',
      justifyContent: 'center',
    },
    '.ibdge-md': {
      width: '1.5rem',
      height: '1.5rem',
      justifyContent: 'center',
    },
    '.ibdge-lg': {
      width: '1.75rem',
      height: '1.75rem',
      justifyContent: 'center',
    },
  };
  const colorClasses = {};
  for (const colorName in colors) {
    if (colorName !== 'white' && colorName !== 'black') {
      colorClasses[`.ibdge-${colorName}`] = {
        backgroundColor: colors[colorName][50],
        color: colors[colorName][500],
        stroke: colors[colorName][500],
      };
    }
  }

  return { ...sizeClasses, ...colorClasses };
};

const badgeClassesGenerator = () => {
  const sizeClasses = {
    '.bdge-sm': {
      padding: '0.125rem 0.5rem',
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    '.bdge-md': {
      height: '1.5rem',
      padding: '0.125rem 0.625rem',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    '.bdge-lg': {
      height: '1.75rem',
      padding: '0.25rem 0.75rem',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
  };

  const colorClasses = {};
  for (const colorName in colors) {
    if (colorName !== 'white' && colorName !== 'black') {
      colorClasses[`.bdge-${colorName}`] = {
        backgroundColor: colors[colorName][50],
        color: colors[colorName][500],
        stroke: colors[colorName][500],
      };
    }
  }

  return { ...sizeClasses, ...colorClasses };
};

const kickAssPlugin = plugin.withOptions(function (_options = {}) {
  const { colors: userColors } = _options;
  return function ({ addComponents }) {
    const buttonClasses = buttonClassesGenerator({ ...colors, ...userColors });
    const iconBadgeClasses = iconBadgeClassesGenerator();
    const badgeClasses = badgeClassesGenerator();
    addComponents({ ...buttonClasses, ...iconBadgeClasses, ...badgeClasses });
  };
});

module.exports = { kickAssPlugin };
