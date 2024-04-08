import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "zoom-in": {
          "0%": {
            opacity: "0.5",
            transform: "scale(1.1)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        pulse: {
          "0%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.3",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
        "zoom-in": "zoom-in 0.5s linear",
        pulse: " pulse 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "mid-size": "1120px",
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
        "cus-icon-red": " #f05c60",
        "cus-bg-grey": " #f7f7f7",
        "cus-bg-blue": " #323657",
      },
    },
  },
  plugins: [],
};
export default config;
