/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'project-cyan': '#0079FF',
        'project-gray': '#697C9A',
        'project-darksilver': '#4B6A9B',
        'project-black': '#2B3442',
        'project-almostwhite': '#F6F8FF',
        'project-dark-black': '#141D2F',
        'project-dark-darkgray': '#1E2A47',
        'project-error': '#F74646',
      },
    },
  },
  plugins: [],
}
