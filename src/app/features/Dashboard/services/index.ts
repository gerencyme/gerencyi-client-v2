import { HomeDataApi } from '@shared/services/axios/api'
import { TMonthsExpensesResponse, TYearExpensesResponse } from '@shared/types'

export const getMonthsExpenses = async () => {
  const endpoint = '/HomeDataApi/months-expenses'
  const { data } = await HomeDataApi.get<TMonthsExpensesResponse>(endpoint)

  if (data) {
    return data
  }

  return null
}

export const getYearsExpenses = async () => {
  const endpoint = '/HomeDataApi/year-expenses'
  const { data } = await HomeDataApi.get<TYearExpensesResponse>(endpoint)

  if (data) {
    return data
  }

  return null
}
