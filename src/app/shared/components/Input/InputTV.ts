import { tv } from "tailwind-variants";

export const inputRootTV = tv({
  base: "flex gap-2 relative",
  variants: {
    variant: {
      mirror: "flex-col",
      "side-label": "items-center",
    },
  },
  defaultVariants: {
    variant: "mirror",
  },
});

export const inputFieldTV = tv({
  base: "flex outline-none items-center placeholder:text-dark-gray-200/50 text-placeholder:text-dark-gray-200/75",
  variants: {
    variant: {
      mirror:
        "border-[0.5px] px-4 font-poppins text-dark-gray-200 border-dark-gray-200/50 bg-dark-gray-200/10 h-6 rounded-full",
      "side-label":
        "rounded-lg dark:bg-dark-background bg-light-background h-10",
    },
  },
  defaultVariants: {
    variant: "mirror",
  },
});

export const errorMessageTv = tv({
  base: "absolute -bottom-4 md:-bottom-5",
});
