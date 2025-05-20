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
        primary: '#1a1a1a',
        secondary: '#e63946',
        accent: '#f1faee',
        'bmw-red': '#e63946',
        'bmw-blue': '#0066b1',
        'bmw-gray': '#1a1a1a',
        'm-blue': '#0066B1',
        'm-light-blue': '#41B6E6',
        'm-red': '#E60C2F',
        'm-dark': '#191919',
        'm-gray': '#232323',
        'm-light-gray': '#2A2A2A',
      },
      backgroundImage: {
        'gradient-m': 'linear-gradient(to right, #0066B1, #41B6E6, #E60C2F)',
      },
    },
  },
  plugins: [],
} 