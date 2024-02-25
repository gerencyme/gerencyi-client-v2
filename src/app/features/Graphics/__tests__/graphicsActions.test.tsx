import { Graphics } from '@features/Graphics'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('GraphicsActions', () => {
  it('should call getExpense callback', async () => {
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

    await user.click(yearAction)

    await waitFor(() => {
      expect(getYearExpenses).toHaveBeenCalledTimes(1)
    })
  })
})
