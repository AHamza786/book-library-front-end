/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5dbea3",
        secondary: "#D2122E",
        primary_green:"#33b249",
      },
    },
  },
  plugins: [],
}