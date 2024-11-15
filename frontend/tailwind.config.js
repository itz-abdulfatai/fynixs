/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#030c15',
        secondary: '#e9efef',
        accent: '#00d9ff',
        accent2: '#024354'
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
      }
      
    },
  },
  plugins: [],
}
