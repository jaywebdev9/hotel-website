/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#142019',
          900: '#182620',
          800: '#24352A',
          700: '#33473A',
        },
        parchment: {
          DEFAULT: '#F0EAD6',
          100: '#F6F2E4',
        },
        clay: {
          DEFAULT: '#A6512E',
          600: '#8C4225',
        },
        gold: {
          DEFAULT: '#C9A227',
          400: '#DABB55',
        },
        ink: '#1B1B16',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
