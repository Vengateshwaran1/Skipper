/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#34404F',
        primary1:'rgb(120, 119, 198)'
      }
    },
  },
  plugins: [],
}