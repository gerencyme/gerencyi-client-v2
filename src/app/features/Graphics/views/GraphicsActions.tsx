'use client'

import { actionLabelTV, actionWrapperTV } from '@features/Graphics/GraphicsTV'
import { Template, Text } from '@shared/components'
import { useState } from 'react'
import { VariantProps } from 'tailwind-variants'

type TGraphicsActions = VariantProps<typeof actionWrapperTV>

export function GraphicsActions({ state }: TGraphicsActions) {
  const [activeId, setActiveId] = useState(0)

  const actions = [
    {
      id: 0,
      label: 'Mês',
      // action: getMonthExpenses,
      action: (id: number) => {
        console.log('peguei os dados do Mês')
        setActiveId(id)
      },
    },
    {
      id: 1,
      label: 'Ano',
      // action: getYearExpenses,
      action: (id: number) => {
        console.log('peguei os dados do Ano')
        setActiveId(id)
      },
    },
  ]

  const sortedActions =
    activeId !== null
      ? [
          actions[activeId],
          ...actions.slice(0, activeId),
          ...actions.slice(activeId + 1),
        ]
      : actions

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
              size="sm"
              weight="bold"
              className={actionLabelTV({ state: activeState })}
            />
          </button>
        )
      })}
    </Template>
  )
}
