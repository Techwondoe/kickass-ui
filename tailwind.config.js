module.exports = {
  content: ['./src/**/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      success: 'var(--color-success)',
      warning: 'var(--color-warning)',
      danger: 'var(--color-danger)',
      info: 'var(--color-info)',
      surface: 'var(--color-surface)',
      onSurface: 'var(--color-onSurface)',
      contrast: {
        primary: 'var(--color-contrast-primary)',
        secondary: 'var(--color-contrast-secondary)',
        success: 'var(--color-contrast-success)',
        warning: 'var(--color-contrast-warning)',
        danger: 'var(--color-contrast-danger)',
        info: 'var(--color-contrast-info)',
        surface: 'var(--color-contrast-surface)',
        onSurface: 'var(--color-contrast-onSurface)',
      },
      custom: {
        primary: 'var(--color-custom-primary)',
        secondary: 'var(--color-custom-secondary)',
        success: 'var(--color-custom-success)',
        warning: 'var(--color-custom-warning)',
        danger: 'var(--color-custom-danger)',
        info: 'var(--color-custom-info)',
        surface: 'var(--color-custom-surface)',
        onSurface: 'var(--color-custom-onSurface)',
      }
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
  plugins: [require('@tailwindcss/forms')],
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
    {
      pattern:
      /(bg|border|text)-(custom)-(primary|secondary|success|warning|danger|info|surface|onSurface)/,
    variants: ['lg', 'hover', 'focus', 'lg:hover'],
    }
  ],
};
