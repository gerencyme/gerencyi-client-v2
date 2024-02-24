'use client'

import { useDashboardController } from '@features/Dashboard/Controller'
import * as utils from '@features/Dashboard/DashBoardUtils'
import { Graphics } from '@features/Graphics'
import { Template } from '@shared/components'

export function DashboardGraphics() {
  const {
    name,
    theme,
    yFormatter,
    expenseData,
    getMonthExpenses,
    getYearExpenses,
  } = useDashboardController()

  return (
    <Template
      direction="row"
      flex-wrap="wrap"
      variant="transparent"
      className="items-center justify-center"
    >
      <Graphics.root>
        <Graphics.header text="Comaprativo Semanal" />
        <Graphics.content
          yFormatter={yFormatter}
          type="bar"
          theme={theme}
          categories={utils.comparationGraphicCategories}
          series={utils.comparationGraphicSeries(theme)}
        />
      </Graphics.root>

      <Graphics.root>
        <Graphics.header
          text="Despesas Mensal"
          actions={
            <Graphics.actions
              getYearExpenses={getYearExpenses}
              getMonthExpenses={getMonthExpenses}
            />
          }
        />
        <Graphics.content
          yFormatter={yFormatter}
          type="area"
          theme={theme}
          categories={expenseData?.date ?? []}
          series={utils.ExpensiveGraphicSeries(
            theme,
            name,
            expenseData?.expenseData ?? [],
          )}
        />
      </Graphics.root>
    </Template>
  )
}
