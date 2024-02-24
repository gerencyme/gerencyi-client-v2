import { tv } from 'tailwind-variants'

export const mainTV = tv({
  base: 'duration-500 min-h-screen w-screen relative overflow-x-hidden',
  variants: {
    bgTheme: {
      dark: 'bg-dark-background',
      light: 'bg-light-background ',
    },
  },
})
