const plugin = require('tailwindcss/plugin');
const { colors } = require('../theme.json');

const addColors = () => {
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
  return colorClasses;
};

const kickAssPlugin = plugin(function ({ addComponents }) {
  let buttonClasses = {
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
  const colorClasses = addColors();
  buttonClasses = { ...buttonClasses, ...colorClasses };
  addComponents({ ...buttonClasses });
});

module.exports = { kickAssPlugin };
