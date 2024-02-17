import { tv } from "tailwind-variants";

export const titleTv = tv({
  base: "font-poppins duration-500 m-0 text-light-background dark:invert",
  variants: {
    fontFamily: {
      poppins: "font-poppins",
      montserrat: "font-montserrat",
    },
    size: {
      "2xl": "md:text-lg lg:text-xl xl:text-2xl",
      xl: "text-lg xl:text-xl",
      lg: "md:text-md lg:text-lg",
      md: "text-sm md:text-md",
    },
    weight: {
      bold: "font-bold",
      normal: "font-normal",
      light: "font-light",
      "semi-bold": "font-500",
      black: "font-black",
    },
    color: {
      black: "text-black",
      white: "text-white",
    },
    align: {
      center: "text-center",
    },
  },
  defaultVariants: {
    size: "lg",
    weight: "normal",
    fontFamily: "poppins",
    color: "white",
  },
});
