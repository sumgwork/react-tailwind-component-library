const reactTailwindComponentLibraryConfig = require('../config');

module.exports = reactTailwindComponentLibraryConfig({
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
});
