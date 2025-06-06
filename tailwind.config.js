/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000',
        purple: {
          900: '#1e0a3c',
        },
      },
      backgroundImage: {
        'gradient-rainbow':
          'linear-gradient(90deg, #7f00ff 0%, #e100ff 50%, #7f00ff 100%)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

