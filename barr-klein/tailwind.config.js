/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#121110', 900: '#0d0c0b', 800: '#171615', 700: '#1d1b19', 600: '#262320', 500: '#33302b' },
        bronze: { DEFAULT: '#c49a5c', light: '#dcbb86', dark: '#9c7440', deep: '#5e3418' },
        parchment: { DEFAULT: '#ece6dc', muted: '#a8a095', dim: '#7d766c' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { eyebrow: '0.28em' },
      maxWidth: { site: '150rem' },
    },
  },
  plugins: [],
}
