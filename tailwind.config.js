/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xl: '1440px',
      md: '1024px',
    },
    extend: {
      colors: {
        'my-green': 'hsl(76, 37%, 68%)',
        'my-green-2': 'hsl(76, 27%, 60%)',
      },
    },
  },
  plugins: [],
}
