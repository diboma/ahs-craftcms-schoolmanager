/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.{twig, js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {},
      colors: {},
      screens: {
        xxs: '375px',
        xs: '512px',
      },
    },
  },
  plugins: [],
};
