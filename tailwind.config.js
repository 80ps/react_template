/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  datkMode: 'calss',
  theme: {
    extend: {},
    fontFamily: {
      En: ['"IBM Plex Mono"', 'monospace'],
      customFontKr: ['"Noto-Sana"', 'Sans-serif'],
    },

    screens: {
      mb: '390px',
      // => @media (min-width: 390px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
