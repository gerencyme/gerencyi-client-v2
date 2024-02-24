import { Template } from '@shared/components'
import { TRootComponent } from '@shared/types'

export function BarChartComparationRoot({ children }: TRootComponent) {
  return (
    <Template variant="default" className="p-3">
      {children}
    </Template>
  )
}
