/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      lg: '1024px',
    },
    extend: {
      fontFamily: {
        noto: ['Noto Sans Bassa Vah', ' sans-serif'],
        gloock: ['Gloock', 'serif'],
        merw: ['Merriweather', 'serif'],
      },
      colors: {
        base: { 300: '#9FFCEE', 500: '#6EB0A6', 700: '#47706A' },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
