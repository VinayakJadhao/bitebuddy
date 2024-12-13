/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",  // Include the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS, TS, JSX, and TSX files in `src/`
  ],
  theme: {
    extend: {}, // Extend Tailwind's default theme if needed
  },
  plugins: [], // Add plugins here if required
};
