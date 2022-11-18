/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        almostblue: '#2292A4',
        almostorange: '#D96C06',
        almostgreen: '#BDBF09',
      },
    },
  },
  plugins: [],
};
