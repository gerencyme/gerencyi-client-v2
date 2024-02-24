import { Dashboard } from '@features/Dashboard'
import { ChangeTheme } from '@features/changeTheme'
import { Title } from '@shared/components'

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Title title="Página em Csontrução" size="2xl" />

      <ChangeTheme.root>
        <ChangeTheme.icon />
      </ChangeTheme.root>

      <Dashboard.graphics />
    </div>
  )
}
