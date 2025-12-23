/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#2B1B12',    // deep coffee brown
          brown: '#6F4E37',   // classic coffee
          amber: '#C0843D',   // warm amber
          cream: '#F5EFE6',   // soft cream
        },
        brown: {
          50: '#f8f6f4',
          100: '#ede8e3',
          200: '#ddd4c7',
          300: '#c6b7a3',
          400: '#b09781',
          500: '#9f7f68',
          600: '#8a6a55',
          700: '#725648',
          800: '#5f483e',
          900: '#4f3d35',
        },
        gold: {
          50: '#fdfbf7',
          100: '#f9f3e8',
          200: '#f3e6cd',
          300: '#ead3a9',
          400: '#ddb977',
          500: '#d4a556',
          600: '#c68d3c',
          700: '#a67233',
          800: '#875c2f',
          900: '#6f4c29',
        },
      },
    },
  },
  plugins: [],
};
