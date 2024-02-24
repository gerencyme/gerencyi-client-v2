import { Text } from '@shared/components'
import Image from 'next/image'

import GerencyI from '@assets/svg/gerencyi.svg'

interface AnimatedLogoGerencyIProps {
  slug: string
}

export function AnimatedLogoGerencyI({ slug }: AnimatedLogoGerencyIProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-11 pt-10 md:pt-20">
      <Image src={GerencyI} alt="Gerency logo" />
      <Text
        text={slug}
        color="white"
        className="max-w-xl m-auto"
        align="center"
        size="md"
        weight="normal"
      />
    </div>
  )
}
