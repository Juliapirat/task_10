/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Item.js",
    "./src/Shop.js",
    "./src/ItemsList.js",
    "./src/index.js"
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'lg':'0.5rem'
    },
    colors: {
     'sky': {
       500: '#0ea5e9',
       600: '#0284c7',
       700:'#0369a1'
     },
     'white':'#fafafa',
     'slate':{
       100:'#f1f5f9',
       300:'#cbd5e1',
       400: '#94a3b8'
     },
     'cyan': {
       500:"#06b6d4"
     },
     'blue':{
       500:"#3b82f6"
     }
    },
    extend: {},
  },
  plugins: [],
}
