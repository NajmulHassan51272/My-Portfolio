/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#1a1025', // deep purple background
          card: '#26143c', // darker purple card
          border: '#412264', // purple border
        },
        accent: {
          primary: '#a855f7', // purple-500
          hover: '#c084fc', // purple-400
        }
      }
    },
  },
  plugins: [],
}
