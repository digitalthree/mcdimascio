/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#3e87f7",
        secondary:"#e1ecfd",
        banner:"#cbcbcb"
      }
    },
  },
  plugins: [require("daisyui")],
}