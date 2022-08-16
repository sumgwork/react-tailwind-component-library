export default {
  ['TEXT']: {
    base: 'antialiased',

    variant: {
      hero: {
        base: 'font-brand font-bold leading-tight',
        1: 'text-9xl',
        2: 'text-8xl',
        3: 'text-7xl',
        4: 'text-6xl',
        5: 'text-6xl',
        6: 'text-6xl',
        7: 'text-6xl',
        8: 'text-6xl',
        9: 'text-6xl',
      },
      display: {
        base: 'font-brand font-bold leading-tight',
        1: 'text-4xl',
        2: 'text-3xl',
        3: 'text-xl',
        4: 'text-lg',
        5: 'text-base',
        6: 'text-sm',
        7: 'text-xs',
        8: 'text-xxs',
        9: 'text-xxxs',
      },
      heading: {
        base: 'font-generic leading-tight',
        1: 'text-4xl',
        2: 'text-3xl',
        3: 'text-xl',
        4: 'text-lg',
        5: 'text-base',
        6: 'text-sm',
        7: 'text-xs',
        8: 'text-xxs',
        9: 'text-xxxs',
      },
      body: {
        base: 'font-generic leading-snug',
        1: 'text-lg',
        2: 'text-base',
        3: 'text-sm',
        4: 'text-xs',
        5: 'text-xs',
        6: 'text-xs',
        7: 'text-xs',
        8: 'text-xs',
        9: 'text-xs',
      },
    },
    weight: {
      regular: 'font-regular',
      bold: 'font-bold',
      medium: 'font-medium',
      light: 'font-light',
    },
    italic: 'italic',
    link: 'text-focused hover:text-hover cursor-pointer underline underline-offset-4 inline-flex items-center',
    button: 'text-focused hover:text-hover cursor-pointer underline underline-offset-4 flex items-center',
  },

  // Icon
  ['ICON']: {
    variant: {
      inherit: '',
      default: 'text-gray-800',
      white: 'text-gray-0',
      brand: 'text-primary-base',
      highlight: 'text-highlight-base',
      success: 'text-success-dark',
      error: 'text-danger-dark',
      info: 'text-info-dark',
    },
  },

  // Image
  ['IMAGE']: {
    base: 'max-w-full h-auto object-cover',
    rounded: {
      default: 'rounded',
      large: 'rounded-lg',
      full: 'rounded-full',
      none: 'rounded-none',
    },
  },

  // Button
  ['BUTTON']: {
    base: 'inline-flex align-bottom items-center justify-center cursor-pointer transition-colors duration-150 py-2 px-4 leading-none rounded',
    variant: {
      default: {
        base: 'bg-primary-base text-gray-0',
        active: 'hover:bg-primary-light active:bg-primary-dark focus:outline-none focus:ring focus:ring-focused',
        disabled: 'opacity-50 cursor-not-allowed',
      },
      brand: {
        base: 'bg-highlight-base text-gray-800',
        active: 'hover:bg-highlight-light active:bg-highlight-dark focus:outline-none focus:ring focus:ring-focused',
        disabled: 'opacity-50 cursor-not-allowed',
      },
      fade: {
        base: 'bg-gray-100 text-gray-800',
        active: 'hover:bg-gray-50 active:bg-gray-200 focus:outline-none focus:ring focus:ring-focused',
        disabled: 'opacity-50 cursor-not-allowed',
      },
    },
    size: {
      default: 'h-11',
      compact: 'h-9',
      large: 'h-13',
    },
    textSize: {
      default: 5,
      compact: 6,
      large: 4,
    },
    iconHeight: {
      default: 16,
      compact: 16,
      large: 16,
    },
    loading: {
      indicatorWidth: 32,
    },
  },

  // Banner
  ['BANNER']: {
    base: 'w-full mx-auto',
    variant: {
      default: 'bg-gray-50 text-gray-600',
      info: 'bg-primary-light text-gray-0',
      dark: 'bg-primary-base text-gray-100',
      brand: 'bg-highlight-light text-gray-900',
      danger: 'bg-danger-base text-gray-0',
      warning: 'bg-warning-base text-gray-900',
      success: 'bg-success-base text-gray-0',
    },
    size: {
      default: 'px-4 py-5',
      compact: 'px-3 py-4',
    },
    rounded: 'rounded',
  },
};
