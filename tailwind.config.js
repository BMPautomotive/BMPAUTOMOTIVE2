/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'm-dark': '#0a0a0a',
        'm-gray': '#1a1a1a',
        'm-red': '#E60C2F',
        'm-blue': '#0066B1',
        'm-light-blue': '#41B6E6',
      },
      backgroundImage: {
        'gradient-m': 'linear-gradient(90deg, #0066B1 0%, #41B6E6 50%, #E60C2F 100%)',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1.1) translate(0, 0)' },
          '50%': { transform: 'scale(1.2) translate(-1%, -1%)' },
          '100%': { transform: 'scale(1.1) translate(0, 0)' },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'ken-burns': 'ken-burns 20s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} 