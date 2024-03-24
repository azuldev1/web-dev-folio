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
    },
  },
  plugins: [],
}

