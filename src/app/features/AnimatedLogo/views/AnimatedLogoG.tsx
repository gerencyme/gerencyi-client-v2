import Logo from '@assets/svg/logo.svg'
import Image from 'next/image'

export function AnimatedLogoG() {
  return (
    <div className="flex items-center justify-center">
      <Image
        className="w-20 h-11 mt-2 sm:mt-4 animate-[appear_25000ms_linear]"
        alt="Logo GerencyI"
        src={Logo}
      />
    </div>
  )
}
