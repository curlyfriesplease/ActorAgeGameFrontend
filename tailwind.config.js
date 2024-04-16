/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        honk: ['"Honk"', 'system-ui'],
        jersey: ['"Jersey 15"', 'sans-serif'],
      },
      fontSize: {
        honk: [
          '1rem',
          {
            'font-variation-settings': '"MORF" 15, "SHLN" 50',
            fontFamily: '"Honk", system-ui',
          },
        ],
      },
      spacing: {
        15: '3.75rem', // 15 * 0.25rem = 3.75rem
      },
      translate: {
        '-50': '-50%',
      },
      borderRadius: {
        '5xl': '5rem',
      },
      animation: {
        shimmer: 'shimmery 2s linear infinite',
      },
      keyframes: {
        shimmery: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
