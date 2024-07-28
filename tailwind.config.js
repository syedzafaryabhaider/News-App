/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        buttons: {
          color: '#7E57C2',
        },
        light: {
          primary: '#f8f9fa',
          card: '#cedeed',
          secondary: '#e9ecef',
          background: '#ffffff',
          text: '#343a40',
        },
        dark: {
          primary: '#343a40',
          secondary: '#495057',
          background: '#212529',
          text: '#f8f9fa',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
