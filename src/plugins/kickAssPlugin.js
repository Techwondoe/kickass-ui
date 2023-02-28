const plugin = require('tailwindcss/plugin');
const { colors } = require('../theme.json');
// import theme from '../theme.json';
// const colors = theme.colors
const addColors = () => {
  const colorClasses = {};
  const btnColors = ['primary', 'secondary', 'error', 'warning', 'success'];
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
          };
        } else {
          colorClasses[`.btn-${colorName}-${color}`] = {
            backgroundColor: colors[colorName][color],
          };
        }
      }
    }
  }
  return colorClasses;
};

const kickAssPlugin = plugin(function ({ addComponents }) {
  let buttonClasses = {
    '.btn': {
      padding: '0.5rem 0.875rem',
      borderRadius: '.25rem',
      fontWeight: '500',
    },
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
    '.btn-blue': {
      backgroundColor: '#3490dc',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#2779bd',
      },
    },
    '.btn-red': {
      backgroundColor: '#e3342f',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#cc1f1a',
      },
    },
  };

  const colorClasses = addColors();
  console.log(colorClasses);
  addComponents({ ...buttonClasses, ...colorClasses });
  // addComponents({ ...colorClasses });
});

module.exports = { kickAssPlugin };
