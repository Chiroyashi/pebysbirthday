/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#ff69b4', // Pink khas ulang tahun
        },
        animation: {
          'bounce-slow': 'bounce 3s infinite',
        }
      },
    },
    plugins: [],
    extend: {
        animation: {
        'spin-slow': 'spin 6s linear infinite',
        }
    }
  }