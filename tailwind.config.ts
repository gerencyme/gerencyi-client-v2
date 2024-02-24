import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      poppins: '"Poppins", sans-serif',
      montserrat: '"Montserrat Subrayada", sans-serif',
    },
    fontSize: {
      "2xl": "80px",
      xl: "46px",
      lg: "32px",
      md: "24px",
      sm: "16px",
      xs: "14px",
      xxs: "12px",
    },
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",

      green: "#2EA043",
      "blue-mirror": "rgba(33, 44, 77, 0.2)",
      error: "#E73939",

      dark: {
        background: "#121214",
        template: "#262626",
        primary: "#E9BC1D",

        grey: {
          200: "#D3D3D3",
          400: "#707070",
          500: "#414341",
          600: "#383838",
        },
      },

      light: {
        background: "#D3D3D3",
        template: "#FFFFFF",
        primary: "#D7F78C",
        matte: "#121214",
      },
    },
    extend: {
      keyframes: {
        appear: {
          "0%": { opacity: "0", transform: "translateY(-1vh)" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        appear: "appear 2s linear forwards",
      },
      backgroundImage: {
        "light-vertical-gradient":
          "linear-gradient(180deg, #FFFFFF 43.6%, #D7F78C 258.3%)",
        "dark-vertical-gradient":
          "linear-gradient(180deg, rgba(40, 40, 40, 0.5) 28.33%, rgba(211, 211, 211, 0.25) 100%)",
        "dark-profile-vertical-gradient":
          "linear-gradient(0deg, rgba(211, 211, 211, 0.25) -66.5%, rgba(40, 40, 40, 0.5) 100%)",
        "light-profile-vertical-gradient":
          "linear-gradient(0deg, rgba(215, 247, 140, 0.25) -144.25%, #FFFFFF 39.12%)",
        "montserrat-gradient":
          "linear-gradient(178.19deg, rgba(0, 153, 255, 0.5) -237.49%, #D3D3D3 98.47%, #D3D3D3 98.47%)",
        "home-vertical-gradient":
          "linear-gradient(180deg, #121214 3.5%, rgba(18, 18, 20, 0.7) 25.5%, rgba(42, 42, 42, 0.7) 31.5%, rgba(42, 42, 42, 0.6) 50%, rgba(42, 42, 42, 0.5) 68.5%, rgba(42, 42, 42, 0.4) 84%, rgba(42, 42, 42, 0.3) 100%)",
        "dark-gradient-radial":
          "radial-gradient(44.04% 80.27% at 83.97% 104.44%, #78772A 0%, #383838 56.14%)",
      },
      boxShadow: {
        base: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        mirror: "inset 0px 0px 50px rgba(211, 211, 211, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
