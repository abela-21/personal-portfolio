// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // optional: toggle dark mode via 'dark' class on <html>
  theme: {
    extend: {
      colors: {
        dark: "#0f172a",        // Navy Slate - good dark bg base
        darker: "#0a0f1c",      // Deep Charcoal - even darker bg
        graphite: '#1F1F1F',    // Charcoal Gray - mid dark bg/text
        deepBlue: "#0A192F",    // Deep Blue - subtle blue bg
        accent: "#1e40af",      // Blue Accent - primary blue highlight
        textMain: "#f1f5f9",    // Light Gray Text - main light text color
        yellowAccent: '#facc15',// Tailwind yellow-400 - for accents
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.1' }], // bigger heading for name
        '8xl': ['5.5rem', { lineHeight: '1.1' }], // optional super large
      },
      spacing: {
        '72': '18rem',   // custom size for hero image container
        '96': '24rem',   // larger hero image container
      },
      animation: {
        blink: 'blink 1.5s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // optional, for prose styling
    // Custom plugin for blinking cursor utility class if you want:
    plugin(function({ addUtilities }) {
      addUtilities({
        '.animate-blink': {
          animation: 'blink 1.5s step-end infinite',
        },
      });
    }),
  ],
};
