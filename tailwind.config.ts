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
        grey: "var(--grey)",
        white: "var(--white)",
        blue: "var(--blue)"

      },
      fontSize:{
        large: "40px",
        medium: "24px",
        small: "16px"
      },
      fontFamily:{
        roboto: "var(--roboto)",
        sans:  "var(--sans)"
      }
    },
  },
  plugins: [],
};
export default config;
