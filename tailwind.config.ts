import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "cus-primary": " #028267",
        "cus-primary-dark": " #046450",
        "cus-primary2": " #009c75",
        "cus-primary-dark2": " #028267",
        "cus-invert": " #555",
        "cus-invert-dark": " #393939",
        "cus-background-normal": " #fafafa",
        "cus-background-dark": " #f8f8f8",
        "cus-font-disabled": " #bababa",
        "cus-bg-disabled": " #e6e6e6",
        "cus-line-light": " #727272",
        "cus-line-normal": " #eaeaea",
        "cus-line-dark": " #888",
        "cus-line-disabled": " #d3d3d3",
        "cus-line-top": " #000",
        "cus-font-placeholder": " #999",
        "cus-font-white": " #fff",
        "cus-font-light": " #727272",
        "cus-font-normal": " #555",
        "cus-font-title": " #000",
        "cus-point-error": " #ed4949",
        "cus-point-positive": " #3683d1",
      },
    },
  },
  plugins: [],
};
export default config;
