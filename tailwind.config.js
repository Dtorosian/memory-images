/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#645CAA',
        //
        'deep-sea': '#183e4b',
        'not-deep-blue': '#8ba0a4',
        'coral-red': '#d74a49',
        //
        'midnight-blue': '#023047',
        'golden-yellow': '#FFB703',
        'somewhat-purple': '#525e75',
        //
        'seafoam-blue': '#CBF3F0',
        'turquoise-blue': '#2EC4B6',
        'coral-yellow': '#FFBF69',
        //
        'pumpkin': '#FF6D00',
        'carolina-blue': '#86bbd8',
        'orange-peel': '#FF9E00',
        //
        'beige': '#EAF0CE',
        'slate-gray': '#7D8491',
        'english-violet': '#574B60',
        //
        'ink-gray': '#525e75',
        'mud-green': '#6b867d',
        'sand-beige': '#dcac5b',

      },
      opacity: {
        '65': '0.65', // Add opacity 65% (A6 hex opacity)
      }
    },
  },
  plugins: [],
}