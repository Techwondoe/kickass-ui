const plugin = require('tailwindcss/plugin');
const { colors } = require('../theme.json');

const buttonClassesGenerator = () => {
  let sizeClasses = {
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
  const btnColors = ['primary', 'gray', 'error', 'warning', 'success'];
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
  let sizeClasses = {
    '.badge-sm': {
      width: '1.25rem',
      height: '1.25rem',
      justifyContent: 'center',
    },
    '.badge-md': {
      width: '1.5rem',
      height: '1.5rem',
      justifyContent: 'center',
    },
    '.badge-lg': {
      width: '1.75rem',
      height: '1.75rem',
      justifyContent: 'center',
    },
  };
  return { ...sizeClasses };
};

const kickAssPlugin = plugin(function ({ addComponents }) {
  const buttonClasses = buttonClassesGenerator();
  const iconBadgeClasses = iconBadgeClassesGenerator();
  addComponents({ ...buttonClasses, ...iconBadgeClasses });
});

module.exports = { kickAssPlugin };
