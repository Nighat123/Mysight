/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Make sure to include JSX files if using React
  theme: {
    extend: {
      fontFamily: {
        arimo: ['Arimo', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        matemasie: ['Matemasie', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'], // Add Montserrat font
        roboto: ["Roboto", "sans-serif"],
        handlee: ['Handlee', 'cursive'],
      },
    },
  },
  plugins: [],
}
