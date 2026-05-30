/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        saffron: '#FF6B00',
        navy: '#0F172A',
        gold: '#D8A928',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        premium: '0 24px 80px rgba(15, 23, 42, 0.16)',
      },
    },
  },
  plugins: [],
};
