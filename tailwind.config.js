/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'currentColor': '#F6F6F6',
      'secondaryColor': '#019DF4',
      'white': '#FFFFFF',
      brown: {
        100: '#F5F5F5',
        200: '#D3D4D3',
        300: '#B6B7B7',
        400: '#86888C',
        500: '#50535A',
        600: '#313235',
      },
      blue: {
        300: '#019DF4',
        600: '#0b2739'
      },
      green: {
        100: '#DEBCE4',
        300: '#5cb615',
        600: '#642A72'
      },
      purple: {
        300: '#A13EA1'
      },
      magenta: {
        300: '#E63780'
      },
      orange: {
        300: '#EC6248'
      },
      yellow: {
        300: '#F28D15'
      }
    },
    extend: {},
  },
  plugins: [],
}
