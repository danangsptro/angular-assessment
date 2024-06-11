/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#ff0000', // Custom red color
      }
    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
})

