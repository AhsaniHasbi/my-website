/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'mono': ['"SF Mono"','"Fira Code"','"Fira Mono"','"Roboto Mono"'," monospace"],
      'sans': ["Calibri", '"Gill Sans"', '"Gill Sans MT"', '"Trebuchet MS"', "sans-serif"]
    },
    extend: {
      colors: {
        'black': '#001530',
        'dark': '#031A39',
        'navy': '#1F4287',
        'blue': '#278EA5',
        'teal': '#21E6C1',
        'grey': '#EEEEEE',
      }
    },
  },
  plugins: [],
}
