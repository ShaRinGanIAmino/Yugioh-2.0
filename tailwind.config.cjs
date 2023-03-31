/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#0F0B19',
        secondary: '#6E85FF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        old: ['Old English Text MT', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      lgg: '1365px',
      xl: '1700px',
    },
  },
  plugins: [],
};
