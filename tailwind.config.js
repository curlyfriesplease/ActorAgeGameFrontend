/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        15: '3.75rem', // 15 * 0.25rem = 3.75rem
      },
      translate: {
        '-50': '-50%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
