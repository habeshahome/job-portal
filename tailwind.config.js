/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ["Ubuntu"],
        'body': ["sans-serif"],
      }
    },
  },
  plugins: [],
}