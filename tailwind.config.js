/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#fdfaf5',
          100: '#faf3e8',
          200: '#f5e9d3',
          300: '#eddabc',
          400: '#e4c99e',
        },
        charcoal: {
          900: '#1a1410',
          800: '#2a211a',
          700: '#3d3028',
          600: '#5a4a3e',
          500: '#7a6a5e',
        },
        gold: {
          300: '#e8c87a',
          400: '#d4a843',
          500: '#b8872a',
          600: '#9a6e1e',
        },
        brown: {
          100: '#f0e6d8',
          200: '#e0ccb4',
          300: '#c8a882',
          400: '#a88060',
          500: '#8a6040',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-down': 'slideDown 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
