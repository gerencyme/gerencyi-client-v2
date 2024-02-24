import { inputRootTV } from '@shared/components/Input/InputTV'
import { TRootComponent } from '@shared/types'
import { VariantProps } from 'tailwind-variants'

type TInputRootProps = TRootComponent & VariantProps<typeof inputRootTV>

export function InputRoot({ children, variant }: TInputRootProps) {
  return <div className={inputRootTV({ variant })}>{children}</div>
}
