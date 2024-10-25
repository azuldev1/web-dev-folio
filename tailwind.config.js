/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend:  {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        '24': '6rem',
        '28': '7rem',
        '32': '8rem', 
      },
        fontSize: {
        '6xl': '3.75rem',  // or any size you want
        '7xl': '4.5rem',  // or any size you want
        '8xl': '5.5rem',  // or any size you want
      }      
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

