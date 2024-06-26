import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // defines all the min widths
        'xs': '360px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'blue': '#4462F4',
        'off-black': '#2B2F32',
        'complement': '#F4D644',
        'off-white': '#F4F4F4', 
        'complement-light-70' : 'rgba(244, 214, 68, 0.7)',
        'complement-light-50' : 'rgba(244, 214, 68, 0.5)',
      },
    },
  },
  darkMode : 'class',
  plugins: [],
};
export default config;
