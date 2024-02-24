import {
  getMonthsExpenses,
  getYearsExpenses,
} from '@features/Dashboard/services'
import { useTheme } from '@shared/hooks/contexts/useTheme'
import { useCompanyInfo } from '@shared/hooks/useCompanyInfo'
import { timeToRefetchCache } from '@shared/utils/constants/timeToRefetchCache'
import { capitalizeName, formatPrice } from '@shared/utils/transformers'
import { useCallback, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

type TExpenseData = {
  date: string[] | number[]
  expenseData: ApexNonAxisChartSeries
}

export const useDashboardController = () => {
  const { company } = useCompanyInfo()
  const { theme } = useTheme()

  const [expenseData, setExpenseData] = useState<TExpenseData>()

  const companyName = company?.name.split(' ')[0] || ''

  const name = capitalizeName(companyName)

  const yFormatter: ApexTooltipY = {
    formatter: (val) => {
      const formattedVal = formatPrice(val)
      return formattedVal || ''
    },
  }

  const getMonthExpenses = useCallback(async () => {
    const monthsExpenses = await getMonthsExpenses()

    setExpenseData({
      date: monthsExpenses?.monthsExpenses ?? [],
      expenseData: monthsExpenses?.monthsExpensesData ?? [],
    })

    return monthsExpenses
  }, [])

  const getYearExpenses = useCallback(async () => {
    const yearsExpenses = await getYearsExpenses()

    return setExpenseData({
      date: yearsExpenses?.yearExpenses ?? [],
      expenseData: yearsExpenses?.yearExpensesData ?? [],
    })
  }, [])

  const { data } = useQuery('dashboardExpenses', getMonthExpenses, {
    refetchOnWindowFocus: false,
    staleTime: timeToRefetchCache['12-hours'],
  })

  useEffect(() => {
    setExpenseData({
      date: data?.monthsExpenses ?? [],
      expenseData: data?.monthsExpensesData ?? [],
    })
  }, [])

  return {
    theme,
    name,
    yFormatter,
    expenseData,
    getMonthExpenses,
    getYearExpenses,
  }
}
