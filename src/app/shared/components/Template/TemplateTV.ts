import { tv } from "tailwind-variants";

export const templateTV = tv({
  base: "relative rounded-2xl p-2 md:p-4 h-fit w-fit",
  variants: {
    overflow: {
      hidden: "overflow-hidden",
      "scroll-x": "overflow-x-scroll",
      "scroll-x-hidden": "overflow-x-hidden",
      "scroll-y": "overflow-y-scroll flex-col",
      "scroll-y-hidden": "overflow-y-hidden",
    },
    direction: {
      col: "flex-col",
      row: "flex-row",
    },
    variant: {
      mirror: "",
      default: "bg-light-template dark:bg-dark-template",
      "vertical-gradient": "dark:bg-dark-vertical-gradient",
      "radial-gradient": "dark:bg-dark-gradient-radial",
    },
    shadow: {
      base: "shadow-base",
    },
  },
  defaultVariants: {
    variant: "default",
    direction: "col",
  },
});
