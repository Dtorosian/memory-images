/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#645CAA', // Add the base color
      },
      opacity: {
        '65': '0.65', // Add opacity 65% (A6 hex opacity)
      }
    },
  },
  plugins: [],
}