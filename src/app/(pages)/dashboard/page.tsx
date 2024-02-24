import { BarChartComparation } from '@features/BarChartComparation'
import { ChangeTheme } from '@features/changeTheme'
import { Title } from '@shared/components'

export default function DashboardPage() {
  return (
    <>
      <Title title="Página em Csontrução" size="2xl" />

      <ChangeTheme.root>
        <ChangeTheme.icon />
      </ChangeTheme.root>

      <BarChartComparation.root>
        <BarChartComparation.label text="Comaprativo Semanal" />
        <BarChartComparation.graphic />
      </BarChartComparation.root>
    </>
  )
}
