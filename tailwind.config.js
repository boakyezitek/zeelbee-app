/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'zeel-default': ['Poppins', 'sans-serif'],
        'zeel-regular': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'zeel-green-100': 'rgba(0, 143, 95, 0.12)',
        'zeel-green-200': 'rgba(0, 143, 95, 0.30)',
        'zeel-green-400': '#008F5F',
        'zeel-green-300': '#26DE81',
        'zeel-green-400' : '#008F5F',
        'zeel-green-600': '#005236',
        'zeel-primary': '#2D9CDB',
        'zeel-info': '#435EBE',
        'zeel-secondary': '#E1E4EA',
        'zeel-danger': '#FC5C65',
        'zeel-warning': '#FFBE0A',
        'zeel-orange-200': '#FFF3E5',
        'zeel-orange-300': '#FFCE99',
        'zeel-orange-500': '#FA8100',
        'zeel-orange-gradient': 'rgba(250, 129, 0, 0.15), rgba(250, 129, 0, 0.06)',
        'zeel-orange-400' : '#FFF2D1',
        'zeel-orange-500' : '#FA8100',
        'zeel-orange-gradient': 'rgba(250, 129, 0, 0.15), rgba(250, 129, 0, 0.06)',
        'zeel-dark-300' : '#8D9AB2',
        'zeel-dark-600' : '#323B4E',
        'zeel-dark-400': '#5A6B8C',
        'zeel-dark-500': '#3C475D',
        'zeel-gray-50': 'rgba(212, 212, 212, 1)',
        'zeel-gray-100': 'rgba(34, 34, 34, 0.3)',
        'zeel-gray-200': 'rgba(0, 0, 0, 0.07)',
        'zeel-gray-300': '#F3F5F6',
        'zeel-gray-400': '#D3D8E0',
        'zeel-gray-500': '#ECEFF3',
        'zeel-shadow-500': 'rgba(60, 71, 93, 0.20)',
        'zeel-clip-700': 'rgba(255, 255, 255, 0.80)',
      },
      borderRadius: {
        'zeel-rounded': '10px',
        'zeel-rounded-lg': '12px',
        'zeel-rounded-extra-lg': '18px',
      },
      fontSize: {
        'zeel-text-extra-small': '12px',
        'zeel-text-small': '15px',
        'zeel-text-meduim': '18px',
        'zeel-text-large': '24px',
        'zeel-text-extra-large': '42px'
      },
      animation: {
        'fade-in-up': 'fadeInUp 500ms 1',
        'fade-out-down': 'fadeOutDown 500ms 1',
        'fade-in-right': 'fadeInRight 500ms 1',
        'fade-out-right': 'fadeOutRight 500ms 1'
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: 0, transform: "translate3d(0, 100%, 0)" },
          to: { opacity: 1, transform: "translate3d(0, 0, 0)" }
        },
        fadeOutDown: {
          from: { opacity: 1 },
          to: { opacity: 0, transform: "translate3d(0, 100%, 0)" }
        },
        fadeInRight: {
          from: {
            opacity: 0,
            transform: "translate3d(100%, 0, 0)",
          },
          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)"
          }
        },
        fadeOutRight: {
          from: {
            opacity: 1
          },
        
          to: {
            opacity: 0,
            transform: "translate3d(100%, 0, 0)"
          }
        }
      }
    },
  },
  plugins: [],
}