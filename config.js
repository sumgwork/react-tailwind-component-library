const deepMerge = require('deepmerge');
const customFormsPlugin = require('@tailwindcss/forms');

const colors = {
  transparent: 'transparent',
  white: '#ffffff',
  black: '#000000',

  primary: {
    base: '#161f3f',
    light: '#47588b',
    dark: '#04071e',
    fade: '#d5dff5',
  },

  highlight: {
    base: '#edb54c',
    light: '#f4cd77',
    dark: '#cb9237',
    fade: '#fef7db',
  },

  success: {
    base: '#84ed6f',
    fade: '#dcfdc7',
    dark: '#39aa37',
  },

  info: {
    base: '#2b6aff',
    fade: '#d4e6ff',
    dark: '#153bb7',
  },

  danger: {
    base: '#ff6247',
    fade: '#ffebda',
    dark: '#db3f33',
  },

  warning: {
    base: '#ffd800',
    fade: '#fffacc',
    dark: '#b79500',
  },

  gray: {
    0: '#ffffff',
    50: '#f3f4f5',
    100: '#e6e9eb',
    200: '#cdd3d7',
    300: '#9ca7af',
    400: '#6a7c88',
    600: '#395060',
    800: '#072438',
    900: '#04121C',
    1000: '#000000',
  },

  focused: '#0075bc',
  hover: '#00568a',
};

const fontFamily = {
  generic: ['sans-serif'],
  brand: ['serif'],
};

const backgroundOpacity = (theme) => ({
  10: '0.1',
  ...theme('opacity'),
});

const maxHeight = (theme) => ({
  0: '0',
  xl: '36rem',
  ...theme('spacing'),
});

const fontSizeExtensions = {
  '9xl': '6.25rem',
  '8xl': '5.5rem',
  '7xl': '4.5rem',
  '6xl': '4rem',
  '3xl': '1.75rem',
  xl: '1.25rem',
  xxxs: '0.5rem',
  xxs: '0.625rem',
};

const lineHeightExtensions = {
  snug: '1.4',
};

const spacingExtensions = {
  13: '3.25rem',
};

const zIndexExtensions = {
  '-1': '-1',
};

const reactTailwindComponentLibraryConfig = {
  // eslint-disable-next-line prettier/prettier
  content: ['node_modules/react-tailwind-component-library/lib/defaultTheme.js', 'node_modules/react-tailwind-component-library/dist/index.js'],
  theme: {
    colors,
    backgroundOpacity,
    maxHeight,
    fontFamily,
    extend: {
      fontSize: fontSizeExtensions,
      lineHeight: lineHeightExtensions,
      spacing: spacingExtensions,
      zIndex: zIndexExtensions,
    },
  },
  plugins: [customFormsPlugin],
};

function arrayMergeFn(destinationArray, sourceArray) {
  return destinationArray.concat(sourceArray).reduce((acc, cur) => {
    if (acc.includes(cur)) return acc;
    return [...acc, cur];
  }, []);
}

/**
 * Merge reactTailwindComponentLibraryConfig and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function wrapper(tailwindConfig) {
  const content = tailwindConfig.content;
  return deepMerge({ ...tailwindConfig, content }, reactTailwindComponentLibraryConfig, {
    arrayMerge: arrayMergeFn,
  });
}

module.exports = wrapper;
