import { templateTV } from '@shared/components/Template/TemplateTV'
import { TRootComponent } from '@shared/types'
import { VariantProps } from 'tailwind-variants'

type TTemplateProps = TRootComponent & VariantProps<typeof templateTV>

export function Template({ children, className, ...props }: TTemplateProps) {
  return <div className={templateTV({ className, ...props })}>{children}</div>
}
