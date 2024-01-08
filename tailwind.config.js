/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
     
    },
    extend: {
      animation:{
        slidein:'slideIn 1s ease-in-out'
      },
      colors: {
        'primary': '#FF9653',
        'pm-lite':'#FFF1E8'
      },
      backgroundSize: {
        '30vw': '30vw',
        '40vw': '40vw',
        '55vw': '55vw',
        '60vw': '60vw'
        
      },
      fontFamily: {
        'primary': ['Comfortaa','ui-sans-serif', 'system-ui'],
        
      },
    },
  },
  plugins: [],
}

