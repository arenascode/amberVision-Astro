import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      screens: {
      '1.5xl': '1440px'
    }
    },
    
  },
  plugins: [daisyui],
};
