/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'zeel-default-font': ['Poppins', 'sans-serif'],
        'zeel-regular-font': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'zeel-green-100': 'rgba(0, 143, 95, 0.12)',
        'zeel-green-200': 'rgba(0, 143, 95, 0.30)',
        'zeel-green-400' : '#008F5F',
        'zeel-green-600': '#005236',
        'zeel-primary' : '#2D9CDB',
        'zeel-info' : '#435EBE',
        'zeel-secondary': '#E1E4EA',
        'zeel-danger': '#FC5C65',
        'zeel-warning': '#FFBE0A',
        'zeel-orange-200': '#FFF3E5',
        'zeel-orange-300': '#FFCE99',
        'zeel-orange-500' : '#FA8100',
        'zeel-orange-gradient': 'rgba(250, 129, 0, 0.15), rgba(250, 129, 0, 0.06)',
        'zeel-dark-300' : '#8D9AB2',
        'zeel-dark-500': '#3C475D',
        'zeel-gray-200': 'rgba(0, 0, 0, 0.07)',
        'zeel-gray-300' : '#F3F5F6',
        'zeel-gray-400' : '#D3D8E0',
        'zeel-gray-500': '#ECEFF3',
      },
      borderRadius: {
        'zeel-rounded': '12px'
      }
    },
  },
  plugins: [],
}