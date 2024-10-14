/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend:  {
      spacing: {
        '24': '6rem',
        '28': '7rem',
        '32': '8rem', 
      },
        fontSize: {
        '6xl': '3.75rem',  // or any size you want
      }      
    },
  },
  plugins: [],
}

