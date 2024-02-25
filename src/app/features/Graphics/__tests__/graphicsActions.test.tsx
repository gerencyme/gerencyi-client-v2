import { Graphics } from '@features/Graphics'
import { act, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('GraphicsActions', () => {
  it('should call getExpense callback', () => {
    const yearButtonLabel = 'Ano'
    const getMonthExpenses = jest.fn()
    const getYearExpenses = jest.fn()

    const graphic = (
      <Graphics.actions
        getMonthExpenses={getMonthExpenses}
        getYearExpenses={getYearExpenses}
      />
    )
    const user = userEvent.setup()

    const { getByTestId } = render(graphic)

    const yearAction = getByTestId(yearButtonLabel)

    act(() => user.click(yearAction))

    waitFor(() => {
      expect(getYearExpenses).toHaveBeenCalledTimes(1)
    })
  })
})
