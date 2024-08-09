/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-purple': '#3F3D56',
        'slate-blue': '#8D9CB8',
        'blue-ocean': '#007FFF',
        'pale-white': '#F5F7F9'
      }
    },
  },
  plugins: [],
}
