/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable sort-keys */
const plugin = require('tailwindcss/plugin');
const { colors } = require('../theme.json');

const buttonClassesGenerator = (colors) => {
  const sizeClasses = {
    '.btn-sm': {
      '@apply px-3.5 py-2 h-9 rounded-lg': true,
    },
    '.btn-md': {
      '@apply px-4 py-2.5 h-10 rounded-lg': true,
    },
    '.btn-lg': {
      '@apply px-[18px] py-2.5 h-11 rounded-lg': true,
    },
    '.btn-xl': {
      '@apply px-5 py-3 h-12 rounded-lg': true,
    },
    '.btn-2xl': {
      '@apply px-[28px] py-4 h-14 rounded-lg': true,
    },
    '.btn': {
      '@apply px-4 py-2.5 h-10 rounded-lg': true,
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
      '@apply w-5 h-5': true,
    },
    '.ibdge-md': {
      '@apply w-6 h-6': true,
    },
    '.ibdge-lg': {
      '@apply w-7 h-7': true,
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
      '@apply px-2 py-0.5': true,
    },
    '.bdge-md': {
      '@apply px-2.5 py-0.5 h-6': true,
    },
    '.bdge-lg': {
      '@apply px-3 py-1 h-7': true,
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
