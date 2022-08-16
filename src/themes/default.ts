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
};
