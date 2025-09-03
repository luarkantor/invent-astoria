/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        albra: ['"Albra Sans"', 'sans-serif'],
        adega: ['"adega-serif"', 'sans-serif'],
        noto: ['"Noto Sans"', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

