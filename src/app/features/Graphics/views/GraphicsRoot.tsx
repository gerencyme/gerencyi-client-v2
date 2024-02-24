import { Template } from '@shared/components'
import { TRootComponent } from '@shared/types'

export function GraphicsRoot({ children }: TRootComponent) {
  return (
    <Template variant="default" className="p-4 h-full">
      {children}
    </Template>
  )
}
