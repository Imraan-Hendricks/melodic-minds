/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.purple,
        secondary: colors.blue,
        info: colors.sky,
        success: colors.emerald,
        warning: colors.amber,
        error: colors.red,
        gray: colors.gray,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
