module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'publish',
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'checked'],
      borderColor: ['focus-visible', 'first', 'checked'],
      borderWidth: ['checked'],
      textColor: ['visited', 'checked']
    }
  },
  plugins: []
}
