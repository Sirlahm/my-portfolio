const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        'mosk': ['Mosk'],
        'jenthill': ['Jenthill']
      },
      colors: {
        'primary': 'rgba(111, 220, 191, 0.9)',
        'secondary': '#f5f0e1'
      },
      
    },
    screens: {
      
      "xs": "400px",
      "smd": "930px",
      "slg": "1100px",
      "dlg": '1200px',
      
      ...defaultTheme.screens
    },
  },
  plugins: [],
}