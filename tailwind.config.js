/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}", // para Flowbite React
    "./node_modules/flowbite/**/*.js", // para Flowbite base
  ],
  safelist: [
    'hover:bg-azulPrimario-200',
    'hover:bg-amarilloPrimario-200',
    'hover:bg-rojoPrimario-200',
    'hover:bg-verdePrimario-200',
    'hover:bg-azulPrimario-800',
    'hover:bg-amarilloPrimario-800',
    'hover:bg-rojoPrimario-800',
    'hover:bg-verdePrimario-800',
  ],
  theme: {
    extend: {
      colors: {
        azulPrimario: {
          200: '#b7e3ec',   // más claro
          500: '#89bbc6',   // medio
          800: '#397784'    // más oscuro
        },

        rojoPrimario: {
          200: '#FFBE9F',   // más claro
          500: '#f5a77d',   // medio
          800: '#ea8e75'    // más oscuro
        },

        amarilloPrimario: {
          200: '#fdf3a0',   // más claro
          500: '#fce178',   // medio
          800: '#ffd36e'    // más oscuro
        },

        rosaPrimario: {
          200: '#f9cfcf',   // más claro
          500: '#fcaebb',   // medio
          800: '#f29db2'    // más oscuro
        },

        verdePrimario: {
          200: '#bddaab',   // más claro
          500: '#bfd994',   // medio
          800: '#75c093'    // más oscuro
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
