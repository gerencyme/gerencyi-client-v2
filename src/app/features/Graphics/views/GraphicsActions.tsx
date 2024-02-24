'use client'

import { actionLabelTV, actionWrapperTV } from '@features/Graphics/GraphicsTV'
import { useGraphicsController } from '@features/Graphics/controller'
import { Template, Text } from '@shared/components'
import { VariantProps } from 'tailwind-variants'

type TGraphicsActions = {
  getMonthExpenses: () => void
  getYearExpenses: () => void
} & VariantProps<typeof actionWrapperTV>

export function GraphicsActions({
  state,
  getMonthExpenses,
  getYearExpenses,
}: TGraphicsActions) {
  const { sortedActions, activeId } = useGraphicsController(
    getMonthExpenses,
    getYearExpenses,
  )

  return (
    <Template
      direction="row"
      flex-wrap="no-wrap"
      className="gap-5"
      variant="transparent"
    >
      {sortedActions.map((action) => {
        const currentAction = activeId === action.id
        const activeState: typeof state = currentAction
          ? 'isActive'
          : 'notActive'

        return (
          <button
            className={actionWrapperTV({ state: activeState })}
            onClick={() => {
              action.action(action.id)
            }}
            disabled={currentAction}
            key={action.id}
          >
            <Text
              text={action.label}
              size="xs"
              weight="bold"
              className={actionLabelTV({ state: activeState })}
            />
          </button>
        )
      })}
    </Template>
  )
}
