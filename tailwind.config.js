/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode : 'class',

  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens:{

        'xs': {'max': '383px'},


      },
      
      fontSize:{
        'commonHeading' : '40px',
        'commonHeadingDesktop' : '56px',
      },
      lineHeight:{
        'commonLineHeightDesktop' : '64px',
        'mediumLineHeight' : '48px',
        'smallLineHeight' : '32px',

      },
      colors:{
          'primaryColor' : '#EF6D58',
          'secondaryColor' : '#391400',
          'secondaryText' : 'rgba(57, 20, 0, 0.64)'
      },
      backgroundColor:{
        'mainBackground' : '#FDF0E9',
        'primaryBackground' : '#EF6D58',
        'darkPrimaryBackground' : '#B550F8',
        'blackAlike' : '#28293E'
      },
      letterSpacing : {
        'common' : '3px',
      }
    },
  },
  plugins: [],
}