/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts, js, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury': '#E0B973',
      },
      fontFamily: {
        garamond: ['"Adobe Garamond Pro"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        extralight: 200,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}

