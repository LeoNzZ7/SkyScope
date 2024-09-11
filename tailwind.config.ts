import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     extend: {
      colors: {
        brand: {
          100: '#1abc9c',
          200: '#8e44ad',
          300: '#f1c40f',
          400: '#34495e',
          500: '#2ecc71',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
};
export default config;
