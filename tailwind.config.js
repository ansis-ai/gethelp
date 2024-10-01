/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: [
    './docs/**/*.{md,html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

