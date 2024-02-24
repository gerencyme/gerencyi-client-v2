import { tv } from "tailwind-variants";

export const textTv = tv({
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
      sm: "text-xs sm:text-sm",
      xs: "text-xs",
      xxs: "text-xxs",
    },
    weight: {
      bold: "font-bold",
      normal: "font-normal",
      light: "font-light",
      "semi-bold": "font-500",
      black: "font-900",
    },
    color: {
      black: "text-black",
      white: "text-white",
      success: "text-green",
      gray: "text-dark-gray-200/75",
      error: "text-error",
    },
    align: {
      center: "text-center",
    },
  },
  defaultVariants: {
    size: "md",
    weight: "normal",
    fontFamily: "poppins",
    color: "white",
  },
});
