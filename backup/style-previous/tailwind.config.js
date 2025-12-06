/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-primary': '#ff5f52',
        'accent-secondary': '#ffb48a',
        'accent-tertiary': '#23304f',
        'text-primary': '#e8edf8',
        'text-secondary': '#9aa6bf',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'Inter', 'sans-serif'],
        'body': ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
