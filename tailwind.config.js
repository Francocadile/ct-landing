/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
        display: ['Archivo', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f7f8ff',
          100: '#eef1ff',
          200: '#dfe6ff',
          600: '#2554ff',
          700: '#1e44cc',
        },
        champion: {
          50:  '#fffaf0',
          100: '#fff4e0',
          200: '#ffe8b3',
          400: '#fbbf24', // similar a amber-400
        },
      },
      boxShadow: {
        card: '0 10px 20px rgba(2, 6, 23, 0.06)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: { '2xl': '1200px' },
      },
    },
  },
  plugins: [],
}
