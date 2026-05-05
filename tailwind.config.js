export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0A0A0B',
          50:  '#F4F4F5',
          100: '#E4E4E7',
          200: '#D4D4D8',
          300: '#9A9AA1',
          400: '#6B6B72',
          500: '#3D3D42',
          600: '#2A2A2D',
          700: '#1C1C1F',
          800: '#141416',
          900: '#0A0A0B',
          950: '#050506',
        },
        bone: {
          DEFAULT: '#F5F2ED',
          50:  '#FAF8F5',
          100: '#F5F2ED',
          200: '#EAE5DC',
          300: '#D4CCBE',
          400: '#B0A78F',
        },
        gold: {
          DEFAULT: '#D4A24C',
          400: '#E0B86A',
          500: '#D4A24C',
          600: '#B5862F',
          700: '#8E6722',
        },
        ember: {
          DEFAULT: '#B23A2F',
          500: '#B23A2F',
          600: '#922D24',
        },
        santos: {
          green: '#008C72',
          gold: '#FFB81C',
          white: '#FFFFFF',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      boxShadow: {
        glow: '0 0 60px rgba(212, 162, 76, 0.15)',
        elevated: '0 30px 60px -15px rgba(0,0,0,0.5)',
      },
      container: {
        center: true,
        padding: '1.25rem',
        screens: { '2xl': '1280px' },
      },
    },
  },
  plugins: [],
}
