// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d35c54',
          dark: '#723738'
        },
        secondary: {
          light: '#edd7d6',
          soft: '#d79a97'
        }
      }
    },
  },
  plugins: [],
}