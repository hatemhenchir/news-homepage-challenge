/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orange:"hsl(35, 77%, 62%)",
        red:"hsl(5, 85%, 63%)",
        off_white:"hsl(36, 100%, 99%)",
        blue:"hsl(233, 8%, 79%)",
        dark_blue:"hsl(236, 13%, 42%)",
        very_dark_blue:"hsl(240, 100%, 5%)"
      },
      fontSize:{
        '40px':'40px',
        '13px':'13px'
      },
      lineHeight:{
        '50px':'50px'
      }
      
    },
  },
  plugins: [],
};
