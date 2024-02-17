import { tv } from "tailwind-variants";

export const buttonRootTV = tv({
  base: "flex items-center h-7 w-full text-center text-dark-gray-200",
  variants: {
    variant: {
      mirror:
        "ring-1 ring-dark-gray-200/50 bg-dark-gray-200/10 h-6 rounded-full",
      primary: "bg-light-primary dark:bg-dark-primary dark:text-invert",
      secondary:
        "bg-transparent ring-1 bg-ring-primary dark:ring-dark-primary dark:text-invert",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
