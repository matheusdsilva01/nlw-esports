/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'nlw-gradient': 'linear-gradient(to right, #9572FC, #43E7AD, #E1D55D )',
        'black-gradient': 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
        'background': "url(/background.png)"
      }
    },
  },
  plugins: [],
}
