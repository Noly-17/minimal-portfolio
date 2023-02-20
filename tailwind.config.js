/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#be9261',
        secondary: '#323048',
      },
      screens: {
        sm: '640px',
        md: '768px',
        mmd: '844',
        lg: '1024px',
        xl: '1280px',
      },
      maxWidth: {
        readable: '65ch',
        smallWidthChar: '25ch',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
        '5xl': '10px 10px 10px rbga(0,0,0,0,0.6)',
      },
    },
  },
  variants: {},
  plugins: [],
};
