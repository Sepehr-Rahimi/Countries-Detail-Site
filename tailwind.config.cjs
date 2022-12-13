/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        DarkBlue : 'hsl(209, 23%, 22%)', //dark mode element
        VeryDarkBlue1 : 'hsl(207, 26%, 17%)', //dark mode bg
        VeryDarkBlue2 : 'hsl(200, 15%, 8%)', //light mode text
        DarkGray : 'hsl(0, 0%, 52%)', //light mode input
        VeryLightGray : 'hsl(0, 0%, 98%)', //light mode bg 
        White : 'hsl(0, 0%, 100%)', //Dark Mode Text & Light Mode Elements
      }
    },
  },
  plugins: [],
}
