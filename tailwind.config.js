const { kickAssPlugin } = require('./src/plugins/kickAssPlugin');
const { colors } = require('./src/theme.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*!(*.stories|*.spec).{ts,tsx,html}', './public/index.{html,css}'],
  purge: ['./src/**/*!(*.stories|*.spec).{ts,tsx,html}', './public/index.{html,css}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'eudoxus-sans': ['"Eudoxus Sans"'],
      },
    },
    colors: colors,
    fontSize: {
      'd-2xl': [
        '72px',
        {
          lineHeight: '90px',
          letterSpacing: '-0.02em',
        },
      ],
      'd-xl': [
        '60px',
        {
          lineHeight: '72px',
          letterSpacing: '-0.02em',
        },
      ],
      'd-lg': [
        '48px',
        {
          lineHeight: '60px',
          letterSpacing: '-0.02em',
        },
      ],
      'd-md': [
        '36px',
        {
          lineHeight: '60px',
          letterSpacing: '-0.02em',
        },
      ],
      'd-sm': ['30px', '38px'],
      'd-xs': ['24px', '32px'],
      't-xl': ['20px', '30px'],
      't-lg': ['18px', '28px'],
      't-md': ['16px', '24px'],
      't-sm': ['14px', '20px'],
      't-xs': ['12px', '18px'],
    },
  },
  safelist: [
    {
      pattern: /text-(d|t)-(xs|sm|md|lg|xl|2xl)/,
    },
    {
      pattern:
        /(bg|border|text|stroke|fill|ring)-(white|black|gray|primary|error|warning|success|gray-blue|gray-cool|gray-modern|gray-neutral|gray-iron|gray-true|gray-warm|moss|green-light|green|teal|cyan|blue-light|blue|blue-dark|indigo|violet|purple|fuchsia|pink|rose|orange-dark|orange|yellow)/,
      variants: ['hover', 'focus', 'disabled', 'group-hover', 'group-disabled', 'group-focus'],
    },
    {
      pattern:
        /(bg|border|text|stroke|fill|ring)-(white|black|gray|primary|error|warning|success|gray-blue|gray-cool|gray-modern|gray-neutral|gray-iron|gray-true|gray-warm|moss|green-light|green|teal|cyan|blue-light|blue|blue-dark|indigo|violet|purple|fuchsia|pink|rose|orange-dark|orange|yellow)-(25|50|100|200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'disabled', 'group-hover', 'group-disabled', 'group-focus'],
    },
    {
      pattern: /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
    },
    {
      pattern: /btn.*/,
      variants: ['hover', 'focus', 'disabled', 'group-hover', 'group-disabled', 'group-focus'],
    },
    {
      pattern: /ibdge.*/,
      variants: ['hover', 'focus', 'disabled', 'group-hover', 'group-disabled', 'group-focus'],
    },
    {
      pattern: /bdge.*/,
      variants: [
        'hover',
        'focus',
        'disabled',
        'group-hover',
        'group-disabled',
        'group-focus',
        'first',
        'last',
      ],
    },
  ],
  plugins: [require('@tailwindcss/forms'), kickAssPlugin],
};
