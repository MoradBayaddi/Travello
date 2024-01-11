/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBackground:'#0f0b0a',
        lightColor: '#f7f4f3',
        primaryCl: '#f04b0f',
        secondary:'#90310e'
      }
    },
  },
  plugins: [],
}