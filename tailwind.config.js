module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'publish',
  },
  content: ['./src/**/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      contrast: {
        danger: '#fff',
        info: '#fff',
        onSurface: '#fff',
        primary: '#fff',
        secondary: '#fff',
        success: '#000',
        surface: '#000',
        warning: '#fff',
      },
      danger: '#ff4e4e',
      info: '#5F9DF7',
      onSurface: '#000',
      primary: '#4d89ff',
      secondary: '#999999',
      success: '#4dff4d',
      surface: '#fff',
      warning: '#ff965f',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'checked'],
      borderColor: ['focus-visible', 'first', 'checked'],
      borderWidth: ['checked'],
      textColor: ['visited', 'checked'],
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|border|text)-(primary|secondary|success|warning|danger|info|surface|onSurface)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern:
        /(bg|border|text)-(contrast)-(primary|secondary|success|warning|danger|info|surface|onSurface)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
  ],
};
