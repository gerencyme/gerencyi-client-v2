export const monthsExpensesData = [
  31, 40, 28, 51, 42, 109, 100, 85, 77, 94, 112, 154,
]

export const monthsExpenses = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
]

const generateFiveLastYears = () => {
  const currentYear = new Date().getFullYear()
  const years = []

  for (let i = 0; i < 5; i++) {
    years.push(currentYear - i)
  }

  return years.reverse()
}

export const yearExpenses = () => generateFiveLastYears()

export const yearExpensesData = [31500, 40750, 27980, 51930, 42486]
