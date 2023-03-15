const { kickAssPlugin } = require('./src/plugins/kickAssPlugin');
const { colors } = require('./src/theme.json');
const { fontSize } = require('./src/font.json');


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
    colors,
    fontSize,
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
      variants: ['hover', 'focus', 'disabled', 'group-hover', 'group-disabled', 'group-focus'],
    },
  ],
  plugins: [require('@tailwindcss/forms'), kickAssPlugin],
};
