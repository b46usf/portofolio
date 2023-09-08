/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
  plugins: [require("daisyui")],
  theme: {
    fontFamily: {
      'poppins' : ['poppins', 'sans-serif']
    },
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

