/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            light: '#d4edde',
            medium: '#79b960',
            dark: '#043a1c',
          },
          gray: '#839d92',
          tan: '#d1a06d',
        }
      },
    },
  },
  plugins: [],
};