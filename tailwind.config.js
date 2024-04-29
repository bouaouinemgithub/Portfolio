/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
  
    colors: {

      white: {
         default: '#FFFFFF',
         100: '#828282'
          },

      black: {
         default: '#000000',
         100: '#212121',
         200: '#535353',
         300: '#4F4F4F'
      },

      gren: '#27AE60',

      container: {
    
       
      },

    
    },

    // Partie de responsive
    // le container va change avec screen
    
    screens: {
      'sm': '300px',
       
      // => @media (min-width: 640px) { ... }

      'md': '900px',
      // => @media (min-width: 768px) { ... }

      'lg': '1200px',
      // // => @media (min-width: 1024px) { ... }

      'xl': '1400px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },


    extend: {

      fontSize: {
        sm: '0.875rem',
        base: '1.125rem',
        xl: '3rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },


    },
  },
  plugins: [],
}
