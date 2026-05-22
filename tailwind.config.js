/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ enable dark mode

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        'fade-in': 'fadeIn 0.4s ease-in-out both',
        'bounce-slow': 'bounce 4s infinite',
      },

      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: 'left center' },
          '50%': { backgroundPosition: 'right center' },
        },

        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },

  plugins: [],
};