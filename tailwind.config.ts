import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },

      'fade-in-down': {
        '0%': {
          opacity: '0',
          transform: 'translateY(-10px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },

      'fade-in-up': {
        '0%': {
          opacity: '0',
          transform: 'translateY(10px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },

      'fade-in-right': {
        '0%': {
          opacity: '0',
          transform: 'translateX(10px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },

      'fade-in-left': {
        '0%': {
          opacity: '0',
          transform: 'translateX(-10px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },

    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
