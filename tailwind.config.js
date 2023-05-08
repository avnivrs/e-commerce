/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        alto: '#d9d9d9',
        gray: '#858585',
        shark: '#1b1c1e',
        zorba: '#9c9288',
        silver: '#c9c9c9',
        mischka: '#d2d2d7',
        mercury: '#e9e9e9',
        romance: '#fffefd',
        concrete: '#f2f2f2',
        'wild-sand': '#f5f5f5',
        'dove-gray': '#717171',
        'red-orange': '#ff4136',
        'alto-light': '#cecece',
        'outer-space': '#232b2b',
        'athens-gray': '#eeeff2',
        'outer-space': '#232b2b',
        'white-lilac': '#fcfcfd',
        'gray-light-1': '#7f7f7f',
        'shark-shade-1': '#1d1d1f',
        'azure-radiance': '#0381f9',
        'light-dove-gray': '#676767',
        'mercury-light-1': '#e3e3e3',
      },
      keyframes: {
        'pop-down': {
          '0%': { top: '-200px' },
          '100%': { top: '4px' },
        },
      },
    },
    screens: {
      'x-large': { max: '1440px' },
      large: { max: '1200px' },
      '1105px': { max: '1105px' },
      laptops: { max: '1024px' },
      '890px': { max: '890px' },
      tablets: { max: '768px' },
      phones: { max: '600px' },
      'small-phones': { max: '430px' },
      'x-small-phones': { max: '340px' },
    },
  },
  plugins: [],
};
