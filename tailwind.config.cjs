/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        almostblue: '#2292A4',
        almostorange: '#D96C06',
        almostgreen: '#BDBF09',
        almostwhite: '#F5EFED',
        almostblack: '#0F0A0A',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
};
