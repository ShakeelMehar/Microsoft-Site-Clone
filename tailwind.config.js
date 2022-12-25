/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  mode: "jit",
  purge: [
    './index.html',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 640px) { ... }

      md: "760px",
      // => @media (min-width: 760px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1440px",
      // => @media (min-width: 1536px) { ... }
  },
    extend: {
      colors: {
              'blue': '#1fb6ff',
              'purple': '#7e5bef',
              'pink': '#ff49db',
              'orange': '#ff7849',
              'green': '#13ce66',
              'yellow': '#ffc82c',
              'gray-dark': '#273444',
              'gray': '#8492a6',
              'gray-light': '#d3dce6',
            },
      height: {
        'screen-75': '90vh',
        'screen-50': '50vh'
      },
      fontFamily: {
        'poppins': ['poppins']
      }
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
// module.exports = {
//   content: ['./src/**/*.{html,js}'],
//   theme: {
//     colors: {
//       'blue': '#1fb6ff',
//       'purple': '#7e5bef',
//       'pink': '#ff49db',
//       'orange': '#ff7849',
//       'green': '#13ce66',
//       'yellow': '#ffc82c',
//       'gray-dark': '#273444',
//       'gray': '#8492a6',
//       'gray-light': '#d3dce6',
//     },
//     fontFamily: {
//       poppins: ['poppins', 'sans-serif']
//     },
//     extend: {
//       spacing: {
//         '8xl': '96rem',
//         '9xl': '128rem',
//       },
//       borderRadius: {
//         '4xl': '2rem',
//       }
//     }
//   },
// }
// module.exports = {
//   darkMode: "class",
//   content: ["./src/**/*.{html,css,js}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         Poppins: "Poppins, system-ui, arial",
//       },
//     },
//   },
//   plugins: [],
// }
